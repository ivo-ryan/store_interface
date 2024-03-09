import styled from "styled-components";

export const MainContainer = styled.main`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            min-height: 80vh;

`;

export const ImgSection = styled.section`
            display: flex;
            justify-content: center;
            align-items: center;
            
            gap: 40px;
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
            max-height: 300px;

            img{
                width: 100%;
                height: 100%;
            }
`;


export const InfoContainer = styled.div`
            max-width: 40%;
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