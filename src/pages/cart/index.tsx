import { useParams } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './style';
import { CartProductProps } from "../../types/cart";
import { BiXCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Loading } from "../../components/loading";
import gif from '../../assets/sologif.gif';


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

    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const [ price , setPrice ] = useState<string>('')
    
    useEffect(() => {
        const fetchData = async () => {
             const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`);

            const req = await res.data;

            setUserCart(req.cart);     
        }

        fetchData()
    },[userCart]);

    useEffect(() => {

        const finalPrice = () => {

            if (userCart.length !== 0) {
                
                const price = userCart.map((item) =>    parseFloat(item.price.replace(".", "" )));
                
                const soma = price.reduce((acc, value) => acc + value)
                
                
                const somaString = String(soma);
                setPrice(somaString)
            }else{
                return
            }
    }

    finalPrice()
        
},[userCart]);


   const handleClickDelete = (idProduct:string) => {
        const productFilter = userCart.filter((item) => item.id !== idProduct);
    
        setTimeout( () => {

            const fetchData = async () => {;

                setIsLoading(true);
            
            const api =  axios.create({

                baseURL: "https://store-api-gbye.onrender.com"
            });
        
            const response = await api.put(`/user/${id}`,{
    
                cart: productFilter
            });

            setIsLoading(false)
    
            console.log(response.status);
        }
        fetchData()
        }, 10);
       
   }

   const handleClickFinish = async () => {
    const api =  axios.create({

        baseURL: "https://store-api-gbye.onrender.com"
    });

    const response = await api.put(`/user/${id}`,{

        cart: []
    });

    console.log(response.status);
   }

//    const products = userCart.filter((item) => item.id.length !== 0)

    return (
        <>
            <Navbar id={id}/>
            <S.MainContainer>
                <S.SectionContainer>

                    {isLoading && <Loading/>}

                    {   
                        userCart.length !== 0 ?(

                        userCart.map(( item, index) => {
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
                                    <S.ContainerDelete onClick={() => handleClickDelete(item.id)}>
                                    <BiXCircle/>
                                    </S.ContainerDelete>
                                    </S.ContainerDeleteAndPrice>
                                </S.ProductContainer>
                            )
                        })) : <></>
                    }

                    {

                        userCart.length !== 0 ? (
                            <>
                        <div>
                        <h2>Total</h2>
                        <div>
                            <p>{userCart.length} produtos </p>
                        </div>

                        <S.PriceContainer>
                            <span>R$</span>
                            <p>{price}</p>
                        </S.PriceContainer>

                        
                    </div>

                    <S.ContainerButton onClick={() => handleClickFinish()}>
                        <Link to={`/dashboard/${id}`}>
                        <button>
                            Finalizar compra
                        </button>
                        </Link>
                    </S.ContainerButton></>)
                    :  <S.EmptyCart>
                        
                        <div>

                         <img src={gif} alt="Carrinho vazio" />               
                        </div>
                        <p>
                            Seu carrinho está vazio <span>!</span>
                        </p>
                    </S.EmptyCart>
                    
                }
                </S.SectionContainer>
            </S.MainContainer>
        </>
    )
}