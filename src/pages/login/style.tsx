import styled from "styled-components";


export const FormContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;       
        border-radius: 10px;
        margin-top: 50px;
        
        
`;

export const Container = styled.div`
        
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-direction: column;
            background-color: #000000da;
            max-height: 600px ;
            width: 450px;
            padding: 48px 68px ;
            margin-bottom: 2rem;
            backdrop-filter: blur(14px);

            header{
                display: flex;
                width: 100%;
                justify-content: flex-start;
                color: #fff;

                h1{
                    font-size: 3rem;
                }
            }

            @media (max-width: 425px) {
                width: 80%;
                padding: 20px 40px;
                height: 100%;
                
            }
`;

export const FormC = styled.div`
            width: 100%;
            height: 100%;
            
            form{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 30px;
                width: 100%;}
`;

export const InputContainer = styled.div<{colorb: string}>`
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px 20px ;
                    margin-bottom: 5px;
                    background-color: transparent;
                    border-radius: 4px;
                    color: #ffffffb2 ;
                    border: 1px solid ${p => p.colorb};
                    font-size: 14px;               
                   
`;
export const InputContainerPass = styled.div<{colorb: string}>`
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px 20px ;
                    margin-bottom: 5px;
                    background-color: transparent;
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.7);
                    border: 1px solid ${p => p.colorb};
                    font-size: 14px;               
                   
`;

export const BoxInput = styled.div`
                        width: 100%;

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

export const Submit = styled.div`
                
                    width: 100%;
                    button{
                        width: 100%;
                        font-size: 1.5rem;
                        background-color:rgb(229, 9, 20) ;
                        color: #fff;
                        padding: 11px 6px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all .5s ease ;

                        &:hover{
                            background-color: #C11119 ;
                        }

                    }
`;


export const MsgSucesso = styled.div`
            background-color: #b8daffab ;
            border: 1px solid rgba(255, 255, 255, 0.7);
            padding: 10px ;
            border-radius: 4px;
            margin-top: 10px;
            p{
                color: #004085;
            }

            @media (max-width: 425px) {
                margin-top: 10px;
            }

`;

export const Valid = styled.div<{display:string}>`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 5px;
            color: rgb(229, 9, 20);
            font-size: 14px;
           

            p{
                color: rgb(229, 9, 20);
            }
`;


export const ValidPass = styled.div<{display: string}>`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 5px;
            color: rgb(229, 9, 20);
            font-size: 14px;
           

            p{
                color: rgb(229, 9, 20);
            }
`;