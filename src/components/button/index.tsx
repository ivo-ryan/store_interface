import axios from 'axios';
import { ButtonAddProps } from '../../types/buttonTypes';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//import { CgNametag } from 'react-icons/cg';

export const ButtonAdd = ({ description , image, price, marca, name }:ButtonAddProps) => {

    const { id } = useParams();
    

    const [ cart , setCart ] = useState([]);
    console.log(cart.length);
    

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`)

            const req = await res.data
            setCart(req.cart);          
        }

        fetchData()
    }, [] )
    
    const handlePost = async () => {
        const api =  axios.create({
            baseURL: "https://store-api-gbye.onrender.com"
        });
    
        const response = await api.post(`/ user/${id}`,{
            cart: [
                {   

                    image_url: image ,
                    description: description,
                    price: price,
                    id: cart.length + 1,
                    name: name,
                    marca: marca
                }
            ]
        });

        console.log(response.status);
        
    }
    
    return (
        <>
            <S.Button onClick={handlePost}>Adicionar ao carrinho</S.Button>
        </>
    )
}