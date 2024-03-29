import styled from "styled-components";

export const MainContainer = styled.main`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3rem;
            min-height: 80vh;
            margin-top: 10%;
            margin-bottom: 2rem;

            @media (max-width: 768px) {
                margin-top: 20%;
            }

`;

export const ContainerProduct = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            

            @media (max-width: 768px) {
                transition: all.5s ease;
                flex-direction: column;
            }
`;

export const ImgSection = styled.section`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
`;

export const ImgList = styled.div`

            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                width: 50px;

                li{
                    border: 1px solid rgb(86, 89, 89);
                    padding: .5rem;
                    border-radius: .5rem;
                    cursor: pointer;
                    transition: all .5s ease;
                    img{
                        width: 100%;
                        transition: all .5s ease;
                    }

                    &:hover{
                        box-shadow: 0 0 1rem #007185;
                        border-color: #007185;

                        img{
                            opacity: 80%;
                        }
                    }
                }
            }

`;

export const MainImg = styled.div`
            max-width: 330px;
            max-height: 420px;

            img{
                width: 100%;
                height: 100%;
            }
`;


export const InfoContainer = styled.div`
            max-width: 30%;

            @media (max-width: 768px) {
                max-width: 60%;
            }
`;

export const Description = styled.div`
            border-bottom: 1px solid rgb(86, 89, 89);
            padding-bottom: 2rem;
            width: 100%;

            p{

                &:first-child {
                font-weight: 800;
                font-size: 2.3rem;
                }
            }

            p+p{
                color: #007185 ;
                font-weight: 600;
            }       
`;

export const DispatchContainer = styled.section`
        background-color: rgba(146, 175, 175, 0.456);
        width: 70%;
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        padding: 2rem 0;
        gap: 3rem;

`;


export const ButtonContainer = styled.div`

            button{
                color: black;
                font-weight: 700;
                background-color:#FFD814; ;
                border: none;
                border-radius: 10rem ;
                padding: .5rem 1.5rem  ;
                cursor: pointer;
                transition: all .5s;

                &:hover{
                    background-color: #F7CA00;
                }
            }
`;

export const InfoL = styled.div`
        display: flex;
        align-items: center;
        gap: .5rem ;
        padding-top: 1rem;
`;

export const ContainerPrice = styled.div`
        padding-top: 1rem;
        
        p{
            font-weight: 600;
            font-size: 2rem;

            span{
                font-size: 1.8rem;
                font-weight: 700;
            }
        }
`;