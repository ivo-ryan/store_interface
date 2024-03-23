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

    const re:RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const [ emailPass , setEmailPass ] = useState<string>('');
     const [ user, setUser ] = useState<HomeUser[]>([]);
    const [ valid, setValid ] = useState<string>(borderColor.padrao);
    const [ id , setId ] = useState<string>('');
    
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

    }
      

    const handleEmail = (event:any) => {
        setEmailPass(event.target.value);

        if (data) {         
            const userId = data.map(e => e._id)
            setId(userId[0])

        }

    }


    return (
        <S.MainContainer>

            <div id="back-container">


            <S.LoginContainer>

                <S.Apresentação>
                    <S.ContainerH2>

                    <h2>
                        Os maiores sucessos do mundo dos animes.
                    </h2>
                     
                    </S.ContainerH2>
                    <S.ContainerText>

                     <p>
                        Assista seus animes quando quiser
                     </p>
                    </S.ContainerText>
                </S.Apresentação>

                <S.ContainerValidate>
                    <p>
                        Quer assistir? Informe seu email cadastrado.
                    </p>


                        
                        <S.ContainerButtom>

                        <S.InputContainer colorb={valid}>
                            <label htmlFor="login">Email </label>

                            <input type="text" id="login" onChange={handleEmail}/>
                        </S.InputContainer>

                        {
                        emailRes[0] === emailPass ? (
                            <Link to={`/dashboard/${id}`}>
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
            </S.LoginContainer>
            </div>           
        </S.MainContainer>
    )}
