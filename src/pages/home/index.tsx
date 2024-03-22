import * as S from "./style";
import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export const Home = () => {

    const borderColor = {
        notValid: "red",
        padrao: "#ffffffb2",
    };

    const [ emailPass , setEmailPass ] = useState<string>('');
    // const [ user, setUser ] = useState<Data[]>([]);
    const [ valid, setValid ] = useState<string>(borderColor.padrao);
    const [ loading , setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const api = await axios.get("https://animes-api-k6xs.onrender.com/user");
            const res = api.data;  
            
            setLoading(false)
        //    setUser(res);          
        }

        fetchData()

    },[]);

    // const data = user.filter((e:Data ) => {return e.email === emailPass});
    // const emailRes = data.map((e:Data) => e.email); 
    
    const handleClick = () => {
        
    //     if (emailRes[0]  !== emailPass) {
    //         return setValid(borderColor.notValid);
            
    //     }

    }
      

    const handleEmail = (event:any) => {
        setEmailPass(event.target.value);
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

                    
                        
                        <button onClick={handleClick}>
                        Entrar
                        </button>

                    

                    </S.ContainerButtom>

                </S.ContainerValidate>
            </S.LoginContainer>
            </div>           
        </S.MainContainer>
    )}
