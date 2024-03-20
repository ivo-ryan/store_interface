import * as S from './style';
import { Login } from '../login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataUser } from '../../types/navbarTypes';

interface userProps {
    setUser: (value: React.SetStateAction<string>) => void
}

export const Navbar = ({ setUser }:userProps) => {


    const block = {
        view: "block",
        hide: "none"
    };

    const [ display, setDisplay ] = useState(block.hide); 
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>(''); 
    const [ filterPass, setFilterPass ] = useState([]);
    const [ filterEmail, setFilterEmail ] = useState([]);
    const [data , setData] = useState([]);

    console.log(data);
    
    

    const handleClickDisplay = () => {
        if ( display === block.hide ) {
            setDisplay(block.view);
        }else{
            setDisplay(block.hide);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('https://store-api-gbye.onrender.com/user');

            const data = await req.data ;

            const resEmail = data.map( (e:DataUser) => e.email );

            const resPassword = data.map( (e:DataUser ) => e.senha );

            setData(data)
            setFilterEmail(resEmail);
            setFilterPass(resPassword)
             
        }


        fetchData()

    }, [])

    const comparison = () => {
        
        const emailFilter = filterEmail.filter(e => e === email);

        const passwordFilter = filterPass.filter(e => e === password);
        

        console.log(passwordFilter[0], emailFilter[0]);
        
    }

    comparison()

    return (
        <S.Header>
            <S.Nav>
                <li><h2>Amazon</h2></li>
                <li>
                    <S.Search>
                        
                        <select>
                            <option>Todos</option>
                            <option>Moda</option>
                            <option>Tecnologia</option>
                            <option>Fitness</option>
                        </select>

                        <input type="text" />


                    </S.Search>
                </li>
            </S.Nav>

            <S.LocContainer>

                <div >
                    <h2 onClick={() => setDisplay(block.view)}>
                        Login
                    </h2>
                </div>

                <Login
                display={display}
                handleClickDisplay={handleClickDisplay}
                setEmail={setEmail}
                setPassWord={setPassword}
                />
            </S.LocContainer>
        </S.Header>
    )
}