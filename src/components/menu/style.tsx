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
            gap: 30px;
            
            p{
                color: black;
            }
`;


export const Product = styled.div`
        max-width: 240px;
        height: 432.906px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 3rem;

`;


export const ImageContainer = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #F8F8F8;
            max-width: 100%;
            max-height: 50%;

            
        a{
            width: 100%;
            height: 100%;

            img{
            max-height: 100%;
            width: 100%;
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
`;
