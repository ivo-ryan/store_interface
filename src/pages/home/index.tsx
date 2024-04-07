import * as S from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { HomeUser } from "../../types/homeTypes";



export const Home = () => {

    const borderColor = {
        notValid: "red",
        padrao: "#ffffffb2",
    };

    const [ emailPass , setEmailPass ] = useState<string>('');
     const [ user, setUser ] = useState<HomeUser[]>([]);
    const [ valid, setValid ] = useState<string>(borderColor.padrao);
    
    useEffect(() => {

        const fetchData = async () => {
            const api = await axios.get("https://store-api-gbye.onrender.com/user");
            const res = api.data;
              
           setUser(res);          
        }

        fetchData()

    },[]);

    const data = user.filter((e:HomeUser ) => {return e.email === emailPass});

    const emailRes = data.map((e:HomeUser) => e.email); 
    
    const handleClick = () => {
        
        if (emailRes[0]  !== emailPass) {
            return setValid(borderColor.notValid);  
        }
    };
      

    const handleEmail = (event:any) => {
        setEmailPass(event.target.value);
    };


    return (
        <S.MainContainer>

            <div id="back-container">


            <S.LoginContainer>

                <S.Apresentação>
                    <S.ContainerH2>

                    <h2>
                        Os produtos de mais sucesso do mercado.
                    </h2>
                     
                    </S.ContainerH2>
                    <S.ContainerText>

                     <p>
                        Comece a comprar quando quiser
                     </p>
                    </S.ContainerText>
                </S.Apresentação>

                <S.ContainerValidate>
                    <p>
                        Quer dar uma olhada? Informe seu email cadastrado.
                    </p>


                        
                        <S.ContainerButtom>

                        <S.InputContainer colorb={valid}>
                            <label htmlFor="login">Email </label>

                            <input type="text" id="login" onChange={handleEmail}/>
                        </S.InputContainer>

                        {
                        emailRes[0] === emailPass ? (
                            <Link to={`/dashboard/${data[0]._id}`}>
                        <button onClick={handleClick}>
                            Entrar
                        </button>
                            </Link>
                        ): 
                        <button onClick={handleClick}>
                        Entrar
                        </button>
                    }

                    

                    </S.ContainerButtom>

                </S.ContainerValidate>

                <S.ContainerRegister>
                    <Link to={"/login"}>
                    <p>Não sou cadastrado</p>
                    </Link>
                </S.ContainerRegister>
            </S.LoginContainer>
            </div>           
        </S.MainContainer>
    )}
