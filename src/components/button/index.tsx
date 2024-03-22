import axios from 'axios';
import { ButtonAddProps } from '../../types/buttonTypes';
import * as S from './style';
import { useEffect, useState } from 'react';
//import { CgNametag } from 'react-icons/cg';

export const ButtonAdd = ({ description,id , image, price }:ButtonAddProps) => {

    console.log(id);

    const [ cart , setCart ] = useState([]);
    console.log(cart);
    

    useEffect(() => {
        const fetchData = async () => {
            if (id.length === 0 ) {
                return
            }else{ 
            const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`)

            const req = await res.data
            setCart(req.cart);}          
        }

        fetchData()
    }, [] )
    
    const handlePost = async () => {
        const api =  axios.create({
            baseURL: "https://store-api-gbye.onrender.com"
        });
    
        const response = await api.put(`/ user/${id}`,{
            cart: [
                {   

                    image_url: image ,
                    description: description,
                    price: price,
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