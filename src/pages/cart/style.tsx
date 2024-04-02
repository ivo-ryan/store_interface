import styled from "styled-components";

export const MainContainer = styled.main`
        margin-top: 10%;

        @media (max-width: 768px) {
            margin-top: 20%;
        }
`;


export const ImageProduct = styled.div`
        img{
            width: 6rem;
            max-height: 7rem;
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
`;

export const ProductContainer = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem;
            width: 70%;
            border-bottom: 1px solid #c4c4c4;
`;

export const PriceContainer = styled.div`
            font-size: 2rem;
            font-weight: 600;
            display: flex;

        span{
            height: 100%;
            color: rgb(86, 89, 89);
            font-size: 1.2rem;
            
        }
`;

export const MProduct = styled.div`
                p+p{color: #007185 ;
                font-weight: 600;
                padding-top: .5rem;}
`;

export const ContainerInfo = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
`;


export const ContainerButton = styled.div`
    button{  color: black;
        background-color:#14ff27; ;
        border: none;
        border-radius: 10rem ;
        padding: .5rem 1.5rem  ;
        font-weight: 800;
        cursor: pointer;
        transition: all .5s;

        &:hover{
            background-color: #11dd22;
        }}
`;