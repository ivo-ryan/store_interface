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

export const ContainerDeleteAndPrice = styled.div`
            display: flex;
            gap: 2rem;
`;

export const ContainerDelete = styled.div`
        cursor: pointer;
        svg{
            font-size: 1.8rem;
            color: rgb(229, 9, 20) ;
        }
`;

export const PriceContainer = styled.div`
            font-size: 2rem;
            font-weight: 600;
            display: flex;
            gap: .2rem;

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