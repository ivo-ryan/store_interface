import styled from "styled-components";

export const MainContainer = styled.main`
        margin-top: 11rem;
        margin-bottom: 3rem;
`;


export const ImageProduct = styled.div`
        img{
            max-width: 6rem;
            max-height: 7rem;
        }

        @media (max-width: 425px) {
           img { 
            max-width: 5rem;
            max-height: 6rem;
        }
        }
`;

export const SectionContainer = styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding-bottom: 5rem;
        padding: 0 1rem ;
`;

export const ProductContainer = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem;
            border-bottom: 1px solid #c4c4c4;
            @media (max-width: 425px) {
                width: 100%;
            }

            @media (max-width:1440px) {
                width: 70%;
            }

`;

export const ContainerDeleteAndPrice = styled.div`
            display: flex;
            gap: 2rem;

            @media (max-width: 425px) {
                max-width: 8rem;
                gap: 1rem;
            }
`;

export const ContainerDelete = styled.div`
        cursor: pointer;
        svg{
            font-size: 1.8rem;
            color: rgb(229, 9, 20) ;
        }
`;

export const PriceContainer = styled.div`
            font-weight: 700;
            display: flex;
            gap: .2rem;

        span{
            height: 100%;
            color: rgb(86, 89, 89);
            font-size: 1.2rem;
            
        }

        @media (max-width: 425px) {
            p{
                font-size: 1.3rem;
            }
        }
`;

export const MProduct = styled.div`
                p+p{color: #007185 ;
                font-weight: 600;
                padding-top: .5rem;}

                @media (max-width: 425px) {
                    p{
                    font-size: 1.2rem;
                    }
                }
`;

export const ContainerInfo = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            @media (max-width: 425px) {
                    justify-content: flex-start;
                     gap: 1rem ; 
                     width: 70%;
                }
`;


export const ContainerButton = styled.div`
    button{  
        color: black;
        background-color: rgb(255, 69, 0) ;
        border: none;
        color: #fff;
        padding: .9rem 1.5rem  ;
        font-weight: 800;
        cursor: pointer;
        transition: all .5s;

        &:hover{
            background-color: rgb(219, 60, 3);
        }}

        @media (max-width: 425px) {
                        button{
                           font-size: 1.3rem;
                           font-weight: 600;
                           padding: .4rem .5rem;
                        }
                }
`;

export const FinishCompra = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;

        @media (max-width: 425px) {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        gap: 1rem;

                        h2{
                            font-size: 1.5rem;
                        }
                }
`;

export const QuantityProducts = styled.div`
        p{
            font-weight: 600;

        span{

            font-weight: 700;
            color: rgb(86, 89, 89);
            font-size: 1.6rem;
        }
    }
    @media (max-width: 425px) {
                       p{
                        font-size: 1.4rem;

                        span{
                            font-size: 1.3rem;
                        }
                       }
                }
`;

export const FinishPrice = styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;
        h4{
            color: rgb(86, 89, 89);
            font-size: 1.6rem;
        }

        p{
            font-size: 2rem;
            font-weight: 800;
            display: flex;
            gap: .2rem;
            color: orangered;

        span{
            height: 100%;
            color: rgb(86, 89, 89);
            font-size: 1.2rem;
            
        }

    }

    @media (max-width: 425px) {
                      h4{
                        font-size: 1.2rem;
                      }

                      p{

                        font-size: 1.6rem;
                      }
                }

`;

export const EmptyCart = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 50vh;
        width: 100%;
        
        div{

            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0 , 0, 0.9);
            position: absolute;
            width: 50%;
            border-radius: 40%;
            transition: all .5s ease;
            
            img{
                width: 100%;
                height: 100%;
                opacity: 40% ;
                border-radius: 40%;
            }

            @media (max-width: 768px) {
                width: 90%;
            }
        }

        p{  
            font-size: 4rem;
            font-weight: 600;
            position: absolute;
            color: rgb(229, 9, 20);
            animation: notice 1s ease infinite alternate;

            @keyframes notice {
                to{
                    filter: drop-shadow(0 0 .5rem rgb(229, 9, 20));
                }
            }

            span{
                color: #fff;
                font-size: 4rem;
            }

        }
`;