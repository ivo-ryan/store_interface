import { AiOutlineShoppingCart } from 'react-icons/ai';
import * as S from './style';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Navbar = () => {

    const { idUser } = useParams();

    const [ cart , setCart ] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://store-api-gbye.onrender.com/user/${idUser}`)

            const res = req.data.cart
            console.log(res);
            setCart(res)
            
        }

        fetchData()
    }, [])

    return (
        <S.Header>
            <S.Nav>
                <li><h2>Amazon</h2></li>
                <li>
                    <S.Search>

                        <input type="text" />
                        <S.Cart>  

                        <p>{cart.length}</p>

                        <div>

                            <AiOutlineShoppingCart/>
                        </div>


                        </S.Cart>
                       

                    </S.Search>
                </li>
            </S.Nav>

            <S.LocContainer>

              

            </S.LocContainer>
        </S.Header>
    )
}