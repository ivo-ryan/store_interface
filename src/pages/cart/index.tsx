import { useParams } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './style';
import { CartProductProps } from "../../types/cart";
import { BiXCircle } from "react-icons/bi";


export const Cart = () => {

    const { id } = useParams();

    const [ userCart, setUserCart ] = useState<CartProductProps[]>([{
            description: '',
            image: '',
            marca: '',
            name: '',
            price: '',
            id: '',
    }]);

    const [ indexProduct, setIndexProduct ] = useState<number>(0)

    const newArray = userCart.filter((item, index) => {
        return index === userCart.findIndex((obj) => {
            return (item.id === obj.id )
        })
    });
    

    useEffect(() => {
        const fetchData = async () => {
             const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`);

            const req = await res.data;

            setUserCart(req.cart);     
        }

        fetchData()
    },[]);

    const price = userCart.map((item) =>    parseFloat(item.price.replace(".", "" )));

    const soma = price.reduce((acc, value) => acc + value
    );

   const somaString = String(soma);

   const handleClickDelete = (id:string) => {
        const productFilter = userCart.filter((item, index) => {
           if( item.id === id){
        return (index)}});
        
        console.log(productFilter)
    
        // userCart.splice(indexProduct, 1)
       
   }
   
    

    return (
        <>
            <Navbar id={id}/>
            <S.MainContainer>
                <S.SectionContainer>
                    {
                        newArray.map(( item, index) => {
                            return (
                                <S.ProductContainer key={index}>

                                    <S.ContainerInfo>

                                    <S.ImageProduct>
                                        <img src={item.image} alt={item.name} />
                                    </S.ImageProduct>

                                    <S.MProduct>
                                        <p>

                                        {item.description}
                                        </p>

                                        <p>{item.marca}</p>

                                    </S.MProduct>

                                    </S.ContainerInfo>
                                    <S.ContainerDeleteAndPrice>

                                    <S.PriceContainer>
                                        <span>R$ </span>
                                        <p>
                                            {item.price}
                                        </p>
                                    </S.PriceContainer>
                                    <div onClick={() => handleClickDelete(item.id)}>
                                    <BiXCircle/>
                                    </div>
                                    </S.ContainerDeleteAndPrice>
                                </S.ProductContainer>
                            )
                        })
                    }

                    <div>
                        <h2>Total</h2>
                        <div>
                            <p>{userCart.length} produtos </p>
                        </div>

                        <S.PriceContainer>
                            <span>R$</span>
                            <p>{somaString}</p>
                        </S.PriceContainer>

                        
                    </div>

                    <S.ContainerButton>
                        <button>
                            Finalizar compra
                        </button>
                    </S.ContainerButton>
                </S.SectionContainer>
            </S.MainContainer>
        </>
    )
}