import axios from 'axios';
import { ButtonAddProps, UserPutProps } from '../../types/buttonTypes';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//import { CgNametag } from 'react-icons/cg';

export const ButtonAdd = ({ description , image, price, marca, name }:ButtonAddProps) => {

    const { id } = useParams();

    const  [ user, setUser ] = useState<UserPutProps[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`)

            const req = await res.data
            setUser(req.cart)

            
        }

        fetchData()
    }, [] )
    
    const handlePost = async () => {
        const api =  axios.create({
            baseURL: "https://store-api-gbye.onrender.com"
        });
    
        const response = await api.put(`/ user/${id}`,{

            cart: [

                user.map((item) => {
                    return (
                        {
                            description: item.description,
                            id: item.id,
                            image: item.image,
                            marca: item.marca,
                            price: item.price
                        }
                    )
                }),

                {   
                    id: user.length + 1 ,
                    image_url: image ,
                    description: description,
                    price: price,
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