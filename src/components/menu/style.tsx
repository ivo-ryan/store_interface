import styled from "styled-components";

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
        height: 532.906px;
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
            width: 100%;
            height: 50%;

            
        img{
            max-height: 100%;
            max-width: 100%;
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

export const ButtonAdd = styled.button`
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

`;