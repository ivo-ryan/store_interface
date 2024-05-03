import styled from "styled-components";

export const MainContainer = styled.main`
            transition: all .5s ease;
            margin: 11rem 0 4rem 0;
           
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

            @media (max-width: 450px) {
                padding: 0 1rem;
                gap: 2rem;
                justify-content: space-around;

                p{
                    font-size: 1.4rem;
                }
            }

            @media (max-width: 375px) {
                
                padding: 0 1rem;
                gap: 2rem;
                p{
                    font-size: 1.3rem;
                }
            }
`;


export const Product = styled.div`
        max-width: 240px;
        height: 432.906px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
        padding: 0 1rem;

        @media (max-width: 450px) {
            justify-content: space-evenly;
            width: 150px;
            padding: 0 .5rem ;
            height: 260px;
            gap: 1rem;
        }

`;


export const ImageContainer = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;         
            background-color: #F7F7F7;
            
        a{  
            display: flex;
            justify-content: center;
            align-items: center; 
            max-width: 100%;
            padding: 1rem;

            img{
            max-height: 18rem;
            width: 100%;
        }
        }

        @media (max-width: 450px) {

            a{
                max-width: 10rem;

               img{
                    max-height: 10rem;
                    width: 100%;
               }
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

        @media (max-width: 450px) {
            font-size: 1.5rem;
        }
`;

export const Button = styled.div`


        button{
        color: black;
        background-color:#FFD814; 
        border: none;
        border-radius: 10rem ;
        padding: .5rem 1.5rem  ;
        cursor: pointer;
        transition: all .5s;

        &:hover{
            background-color: #F7CA00;
        }

        @media (max-width: 450px) {
            padding: .5rem .6rem;
            font-size: 1.3rem;
            font-weight: 600;
        }
}
`;
