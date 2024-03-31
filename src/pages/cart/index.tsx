import { useParams } from "react-router"
import { Navbar } from "../../components/navbar/navbar"
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './style'
import { CartProductProps } from "../../types/cart";

export const Cart = () => {

    const { id } = useParams();

    const [ userCart, setUserCart ] = useState<CartProductProps[]>([{
            description: '',
            image: '',
            marca: '',
            name: '',
            price: '',
            quantity: ''
    }]);

    console.log(userCart);
    

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
                <section>
                    {
                        userCart.map(( item, index) => {
                            return (
                                <div key={index}>
                                    <S.ImageProduct>
                                        <img src={item.image} alt={item.name} />
                                    </S.ImageProduct>
                                </div>
                            )
                        })
                    }
                </section>
            </S.MainContainer>
        </>
    )
}