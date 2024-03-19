import styled from "styled-components";

export const SectionContainer = styled.section<{display: string}>`
            display: ${props => props.display};
            position: absolute;
            background-color: #00000096;
            backdrop-filter: blur(15px);
            height: 350px;
            width: 300px;
            padding: 1rem .5rem;

            form{
                height: 100%;
                margin-top: 20px;
            }
`;

export const BoxInput = styled.div`
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

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

export const InputContainerPass = styled.div`
                    display: flex;
                    flex-direction: column;
                    width: 85%;
                    padding: 10px 20px ;
                    margin-bottom: 5px;
                    background-color: transparent;
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.7);
                    border: 1px solid #ffffffb2;
                    font-size: 14px;               
                   
`;

export const InputContainer = styled.div`
                    display: flex;
                    flex-direction: column;
                    width: 85%;
                    padding: 1rem 2rem ;
                    margin-bottom: 5px;
                    background-color: transparent;
                    border-radius: 4px;
                    color: #ffffffb2 ;
                    border: 1px solid #ffffffb2;
                    font-size: 1.4rem;               
                   
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