import { AiOutlineShoppingCart , AiOutlineUser, AiOutlineSearch, AiFillHome} from 'react-icons/ai';
import * as S from './style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface NavbarProps {
    id: string | undefined,
    productFilter?: any ,
    busca?: string
};


export const Navbar = ({ id , productFilter, busca }:NavbarProps) => {


    const [ cart , setCart ] = useState([]);
    const [user, setUser] = useState<string>('');
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`);

            const res = req.data.cart;
            const  data = req.data.user;
            setCart(res);
            setUser(data);
   
        };

        fetchData()
    }, [cart]);  


    return (
        <S.Header>
            <S.Nav>
                <li>
                    <Link to={`/dashboard/${id}`}>

                    <S.ContainerImage>  <AiFillHome />
                   </S.ContainerImage>
                   
                    </Link>
                    </li>
                <li>
                    <S.Search>
                        <S.ContainerSearch>

                        <input type="text" 
                        value={busca}
                        onChange={(event) => productFilter(event.target.value)}
                        />
                        <AiOutlineSearch/>

                        </S.ContainerSearch>
                        <Link to={`/cart/${id}`}>
                        <S.Cart>  

                        <p>{cart.length}</p>

                        <div>

                            <AiOutlineShoppingCart/>
                        </div>


                        </S.Cart>
                       
                        </Link>

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