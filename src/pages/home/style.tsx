import { styled } from 'styled-components';
import Back from '../../assets/commerces.webp'


export const MainContainer = styled.main`
        background-image: url(${Back});
        background-size: cover ;
        background-repeat: no-repeat ;
        background-attachment: fixed ;
`;


export const LoginContainer = styled.div`
        min-height: 100vh;
        width: 100% ;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgb(0 0 0 / 50%);

`;

export const Apresentação = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50%;
        width: 80%;
        gap: 16px;

        @media (max-width: 768px) {
            width: 80%;
        }

        @media (max-width: 425px) {
            width: 90%;
            height: 70%;
        }
`;

export const ContainerH2 = styled.div`

        h2{
            text-align: center;
            font-size: 50px;
        }

        @media (max-width: 425px){
                h2{
                    font-size: 30px;
                }
        }

`;

export const ContainerText = styled.div`
         p{
            font-size: 1.3rem;
        }

        @media (max-width: 425px) {
            p{
                font-size: large;
            }
        }
`;

export const ContainerValidate = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 50%;
        margin-bottom: 100px;
        gap: 16px;

        p{
            font-size: 1.2rem;
        }

        @media (max-width: 768px) {
            width: 85%;
        }

        @media (max-width: 425px) {
            width: 95%;
            p{
                font-size: large;
            }
        }
`;

export const ContainerButtom = styled.div`
        display: flex;
        width: 100%;
        gap: 15px;

        button{
            width: 30% ;
            font-size: 1.5rem;
            background-color:rgb(229, 9, 20) ;
            color: var(--color) ;
            border: none;
            border-radius: 4px;
            font-weight: bold ;
            transition: all .5s ease-in;
            cursor: pointer;

            &:hover{
                background-color: var(--color-principal) ;
            }
        }

        a{
            width: 30%;

            button{
                width: 100%;
                height: 100%;
            }
        }

        @media (max-width: 425px) {
            button{
                font-size: large;
            }

            a{
                font-size: large;
            }
        }
`;

export const InputContainer = styled.div<{colorb: string}>`
        display: flex;
        width: 70%;
        flex-direction: column;
        padding: 10px 20px ;
        background-color: var(--box-animate) ;
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid ${props => props.colorb};
        font-size: 14px;

        
        label{
            text-align: left;
        }

    input{
        background-color: transparent;
        color: var(--color);
        min-height: 16px;
        min-width: 16px;
        outline: none;
        border: none;
        font-size: 16px;
        line-height: 1.5 ;
    }
    

`;