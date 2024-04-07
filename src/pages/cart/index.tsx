import { useParams } from "react-router";
import { Navbar } from "../../components/navbar/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './style';
import { CartProductProps } from "../../types/cart";


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
                                    <S.PriceContainer>
                                        <span>R$ </span>
                                        <p>
                                            {item.price}
                                        </p>
                                    </S.PriceContainer>
                                </S.ProductContainer>
                            )
                        })
                    }

                    <div>
                        <h2>Total</h2>
                        <div>
                            <p>{userCart.length} produtos </p>
                        </div>

                        
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