import * as S from './style';

export const Navbar = () => {
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

            </S.LocContainer>
        </S.Header>
    )
}