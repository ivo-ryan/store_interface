import styled from "styled-components";

export const MainContainer = styled.main`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3rem;
            min-height: 80vh;
            margin-top: 11rem;
            margin-bottom: 2rem;
            transition: all .5s ease;

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

            @media (max-width: 768px) {
                flex-direction: column-reverse;
            }
`;

export const ImgList = styled.div`

            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                transition: all .5s ease;

                li{ 
                    display: flex;
                justify-content: center;
                align-items: center;
                    border: 1px solid rgb(86, 89, 89);
                    padding: .5rem;
                    width: 5rem;
                    height: 5rem;
                    border-radius: .5rem;
                    cursor: pointer;
                    transition: all .5s ease;
                    img{
                        padding: .5rem;
                        max-width: 100%;
                        max-height: 5rem;
                        transition: all .5s ease;
                    }

                    &:hover{
                        box-shadow: 0 0 1rem #007185;
                        border-color: #007185;
                        transform: scale(1.2);

                        img{
                            opacity: 80%;
                        }
                    }
                }
            }

            @media (max-width: 768px) {
                ul{
                    flex-direction: row;
                    width: 100%;

                    li{
                        width: 5rem;
                        height: 5rem;

                    }
                }
            }
`;

export const MainImg = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            
            img{
                transition: all .5s ease;
                width: 430px;
                height: 380px;
            }

            @media (max-width: 450px) {

                img{
                    width: 150px;
                    height: 250px;
                }
            }
`;


export const InfoContainer = styled.div`
            max-width: 30%;

            @media (max-width: 768px) {
                max-width: 60%;
            }

            @media (max-width: 450px) {
                max-width: 80%;
            }
`;

export const Description = styled.div`
            border-bottom: 1px solid rgba(86, 89, 89, 0.544);
            width: 100%;
            
            p{

                &:first-child {
                line-height: 3.8rem;
                font-weight: 600;
                font-size: 2.3rem;
                }
            }

            p+p{
                color: #007185 ;
                font-weight: 600;
                padding-top: .5rem;
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
            display: flex;
            justify-content: end;
            width: 50%;
            
            @media (max-width: 768px) {
                justify-content: center;
            }

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

            
            @media (max-width: 450px) {
                width: 100%;
                button{
                    font-weight: 600;
                }
            }
`;

export const ContainerPrice = styled.div`
        padding-top: 1rem;
        
        p{
            font-weight: 600;
            font-size: 2.5rem;
            display: flex;
            gap: .3rem;

            span{
                font-size: 1.3rem;
                font-weight: 700;
                
                color: rgb(86, 89, 89);
            }
        }
`;

export const SecurityContainer = styled.div`
            padding-top: 4rem;

            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-height: 10rem;
                gap: 10%;

                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                   max-width: 12rem;

                   img{
                    width: 5rem;
                   }

                   p{
                    color: #007185 ;
                    font-weight: 600;
                    padding-top: .5rem;
                   }
                }

                
            @media (max-width: 450px) {
                p{
                    font-size: 1.4rem;
                }
            }
            }

`;