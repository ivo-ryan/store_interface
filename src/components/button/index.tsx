import axios from 'axios';
import { ButtonAddProps } from '../../types/buttonTypes';
import * as S from './style';

export const ButtonAdd = ({ description,id , image, price }:ButtonAddProps) => {

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
                },

            ]
        });

        console.log(response.status);
        
    }
    
    return (
        <>
            <S.Button >Adicionar ao carrinho</S.Button>
        </>
    )
}