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

        @media (max-width: 425px) {
                        padding: 0 .5rem;
                }
`;

export const ContainerImage = styled.div`
        svg{
                max-width: 5rem;
                font-size: 4rem;
                color: rgb(255, 165, 0);
                animation: home 2s ease infinite alternate;
                cursor: pointer;
                transition: all .5s ease;

                &:hover{
                        animation: none;
                        transform: scale(1.2);
                        filter: drop-shadow( 0 0 .3rem #fff)
                }

                @keyframes home {
                        to{
                                filter: drop-shadow( 0 0 .3rem rgba(72, 255, 0, 0.746));
                        }
                }

                @media (max-width: 425px) {
                        max-width: 3rem;
                }
        }
`;

export const Search = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            gap: 2rem;

            @media (max-width: 425px) {
                        gap: .5rem ;
                }

            
`;

export const ContainerSearch = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .1rem;

        input{
                padding: .2rem .5rem  ;
                border: none;
                color: #b47500;
                font-weight: 600;
        }

        svg{    
                cursor: pointer;
                color: orange;
                font-size: 2.6rem;
                padding: .2rem;
                border: none;
                background-color: #3d526c;
                transition: all .5s ease;

                &:hover{
                        background-color: #232F3E;
                }
        }

        @media (max-width: 425px) {
                       input{
                        width: 11rem;
                       }
                }
`;

export const LocContainer = styled.div`
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .5rem 0 .5rem 2rem  ;
                background-color: #232F3E;
                max-height: 3.5rem;
                color: #fff;

                svg{
                        border: .2rem solid #fff;
                        border-radius: 50% ;
                        font-size: 2rem;
                }

                span{
                        color: #FCBA03;
                        animation: user 2s infinite alternate-reverse;

                        @keyframes user {
                                to{
                                     filter:drop-shadow(0 0 .1rem #FCBA03) ;
                                }
                        }
                }
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

