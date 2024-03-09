import styled from "styled-components";

export const Header = styled.header`
        width: 100%;
        height: 60px;
        background-color: #131921;
`;

export const Nav = styled.nav`
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem ;
`;

export const Search = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;

            select{
               text-align: center;
                color: black;
                option{
                    color: black;

                }
            }
`;

export const LocContainer = styled.div`
            background-color: #232F3E;
            height: 3.5rem;
`;