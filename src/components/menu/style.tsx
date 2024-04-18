import styled from "styled-components";

export const MainContainer = styled.main`
            margin-top: 10%;
            transition: all .5s ease;

            @media (max-width: 768px) {
                margin-top: 20%;
            }
`;

export const SectionProduct = styled.section`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            
            p{
                color: black;
            }

            @media (max-width: 425px) {
                p{
                    font-size: 1.3rem;
                }
            }
`;


export const Product = styled.div`
        width: 240px;
        height: 432.906px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        margin-top: 10%;
        padding: 0 1rem;

        @media (max-width: 425px) {
            justify-content: center;
            width: 130px;
            padding: 0 .5rem ;
            height: 320px;
            gap: 1rem;
            margin-top: 15%;
        }

`;


export const ImageContainer = styled.div`
            display: flex;
            justify-content: center;
            align-items: center; 
            width: 240px;
            height: 234px;
            background-color: #F7F7F7;
            
        a{  
            display: flex;
            justify-content: center;
            align-items: center; 
            width: 100%;
            height: 100%;
            padding: 1rem;

            img{
            max-height: 100%;
            max-width: 100%;
        }
        }

        @media (max-width: 425px) {

            width: 100px;
            height: 150px;

            a{
                max-width: 100%;
            }
        }

`;

export const PriceProduct = styled.p`
        font-size: 2rem;
        font-weight: 600;
        display: flex;

        span{
            height: 100%;
            color: rgb(86, 89, 89);
            font-size: 1.2rem;
            
        }

        @media (max-width: 425px) {
            font-size: 1.6rem;
        }
`;

export const Button = styled.button`
        color: black;
        background-color:#FFD814; ;
        border: none;
        border-radius: 10rem ;
        padding: .5rem 1.5rem  ;
        cursor: pointer;
        transition: all .5s;

        &:hover{
            background-color: #F7CA00;
        }

        @media (max-width: 425px) {
            padding: .5rem .6rem;
            font-size: 1.2rem;
            font-weight: 600;
        }

`;
