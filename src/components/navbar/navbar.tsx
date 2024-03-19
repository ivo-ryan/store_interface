import * as S from './style';
import { Login } from '../login';
import { useState } from 'react';

export const Navbar = () => {
    const block = {
        view: "block",
        hide: "none"
    };

    const [ display, setDisplay ] = useState(block.hide);    

    const handleClickDisplay = () => {
        if ( display === block.hide ) {
            setDisplay(block.view);
        }else{
            setDisplay(block.hide);
        }
    };

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
                />
            </S.LocContainer>
        </S.Header>
    )
}