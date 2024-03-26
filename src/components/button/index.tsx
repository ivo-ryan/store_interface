import axios from 'axios';
import { ButtonAddProps, UserPutProps } from '../../types/buttonTypes';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//import { CgNametag } from 'react-icons/cg';

export const ButtonAdd = ({ description , image, price, marca, name }:ButtonAddProps) => {

    const { id } = useParams();

    const  [ user, setUser ] = useState<UserPutProps[]>([]);
    console.log(user);
    const [ product, setProduct ] = useState({
                    image_url: '' ,
                    description: '',
                    price: '',
                    name: '',
                    marca: ''
                
    })
    
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`)

            const req = await res.data;

            setUser(req.cart)
            setProduct({
                    image_url: image ,
                    description: description,
                    price: price,
                    name: name,
                    marca: marca
                
            })

            
        }

        fetchData()
    }, [] )
    
    const handlePost = async () => {
        const api =  axios.create({
            baseURL: "https://store-api-gbye.onrender.com"
        });
    
        const response = await api.put(`/ user/${id}`,{

            cart: [
                {product}
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