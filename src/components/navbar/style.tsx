import styled from "styled-components";

export const Header = styled.header`
        width: 100%;
        height: 60px;
        background-color: #131921;
        position: absolute ;
        z-index: 2;
        position: fixed;
        top: 0;
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
            gap: 2rem;
`;

export const LocContainer = styled.div`
                position: relative;
                background-color: #232F3E;
                height: 3.5rem;
`;


export const Cart = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 1rem;
        cursor: pointer;
        div{
                position: relative;
                svg{
                font-size: 2.5rem;
                color: orange;
                margin-right: 1rem;
                
            }}

            p{  
                background-color: #fff;
                position: absolute;
                color: red;
                font-size: 1.3rem;
                font-weight: 800;
                border-radius: 50%;
                padding: 0 .5rem ;
                top: .5rem;
                margin-right: .5rem;
            }
`;