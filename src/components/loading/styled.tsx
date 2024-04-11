import styled from "styled-components";


export const LoadingContainer = styled.div`
            position: fixed;
            top: 0;
            height: 100%;
            width: 100%;
            background-color:rgba(0, 0, 0, 0.381);

            div{
                height: 100vh;
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                gap: 1rem;

                .spinner{
                    font-size: 5rem;
                    animation: spinner .2s linear infinite;
                    color: #42ed42;
                    
                    @keyframes spinner  {
                        to{
                    transform: rotateZ(360deg);
                }
            }
        }

                .cart{
                    font-size: 5rem;
                    color: orange;
                }
    }
`;


export const ContainerSvgCart = styled.div`

`;