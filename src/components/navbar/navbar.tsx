import { AiOutlineShoppingCart , AiOutlineUser} from 'react-icons/ai';
import * as S from './style';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface IdProps {
    id: string | undefined
}


export const Navbar = ({ id }:IdProps) => {


    const [ cart , setCart ] = useState([]);
    const [user, setUser] = useState<string>('')
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`)

            const res = req.data.cart
            const  data = req.data.user
            setCart(res);
            setUser(data)
   
        }

        fetchData()
    }, [cart]);

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
                <AiOutlineUser/>

              <p>
                
                Olá, <span>{user}</span>
              </p>

            </S.LocContainer>
        </S.Header>
    )
}