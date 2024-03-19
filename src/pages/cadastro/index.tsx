import { FormEvent, useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import * as S from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Cadastro = () => {

    const valid = {
        checked: "green",
        notValid: "red",
        padrao: "#ffffffb2"
    };
    
    const msg = {
        view: "flex",
        hide: "none"
    };
    
    
    const re:RegExp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      const [ check, setCheck ] = useState<string>(valid.padrao);
      const [ checkUser, setCheckUser ] = useState<string>(valid.padrao);
      const [ checkPass, setCheckPass ] = useState<string>(valid.padrao);
      const [ display, setDisplay ] = useState<string>(msg.hide);
      const [ displayUser, setDisplayUser ] = useState<string>(msg.hide);
      const [ displayPass, setDisplayPass ] = useState<string>(msg.hide);  

    const [ user, setUser ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ loading , setLoading ] = useState(false);
    const [ dispatch, setDispatch ] = useState(false);
    console.log(dispatch);
    
    
    const handleClickUser = (event:any) => {
        if (event.target.value.length >= 4 ) {
            setUser(event.target.value);
            setCheckUser(valid.checked);
            setDisplayUser(msg.hide);
            
        }else{
            setCheckUser(valid.notValid);
            setDisplayUser(msg.view);
        }

        if (event.target.value.length > 10 ) {
            setCheckUser(valid.notValid);
            setDisplayUser(msg.view);
        }
    };

    const handleClickEmail = (event:any) => {
        if (re.test(event.target.value)) {
            setEmail(event.target.value);
            setCheck(valid.checked);
            setDisplay(msg.hide);
        }else{
            setCheck(valid.notValid);
            setDisplay(msg.view);
            
        }
        
    };

    const handleClickPass = async (event:any) => {
        if (event.target.value.length >= 4 ) {
            setPassword(event.target.value);
            setCheckPass(valid.checked);
            setDisplayPass(msg.hide);
            
        }else{
            setCheckPass(valid.notValid);
            setDisplayPass(msg.view);
        }

        if (event.target.value.length > 15 ) {
            setCheckPass(valid.notValid);
            setDisplayPass(msg.view);
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
    
        if (!user.length || !password.length || !email.length) {
            return
        };
    
        if (password.length < 4 || password.length > 15 || user.length < 4 || user.length > 10  || re.test(email) === false ) {
            return   
            
        }
        
        
        setLoading(true)
        
        setDispatch(true);
        const api =  axios.create({
            baseURL: "https://store-api-gbye.onrender.com"
        });
    
        const response = await api.post("/user",{
            user: user,
            email: email,
            senha: password
        });
    
        console.log(response);
    
        setLoading(false);
    
      };

    return (

        <>
    <Navbar/>

<S.FormContainer >

<S.Container>
    <header>
        <h1>Cadastre-se</h1>
    </header>
<S.FormC>

<form onSubmit={handleSubmit}>

   <S.BoxInput>

    <S.InputContainerUser colorb={checkUser}>

        <label htmlFor="user"> Nome </label>

        <input 
        type="text" 
        name="user" 
        id="user" 
        autoComplete='false'
        onChange={handleClickUser}
      />

    </S.InputContainerUser>

    <S.ValidUser display={displayUser}><p>O usuário deve ter entre 4 e 10 caracteres!</p> </S.ValidUser>

    </S.BoxInput>

   <S.BoxInput>

    <S.InputContainer colorb={check}>

        <label htmlFor="email">Email </label>

        <input 
        type="email" 
        name="email ou numero" 
        id="email" 
        autoComplete='true'
        onChange={handleClickEmail}
      />

    </S.InputContainer>

    <S.Valid display={display}><p>Informe um email válido!</p> </S.Valid>

    </S.BoxInput>

    <S.BoxInput>

    <S.InputContainerPass colorb={checkPass}>

        <label htmlFor="password">Senha</label>

        <input 
        type="password" 
        name="senha" 
        id="password" 
        onChange={handleClickPass}
        />

    </S.InputContainerPass>

        <S.ValidPass display={displayPass}>
        {/* <BiXCircle/> */}
            <p>A senha deve ter entre 4 e 15 caracteres!</p>
        </S.ValidPass>

    </S.BoxInput> 
    <S.Submit>
    {
                    dispatch === true ? 
                    <Link to={"/"}>
                         <button >Entrar</button>
                    </Link>
                    :
                    <button>Cadastrar</button>
                }
    </S.Submit>

</form>

    </S.FormC> 
    {loading && 
            <S.MsgSucesso>
                <p>Usuário cadastrado com sucesso!</p>
            </S.MsgSucesso>  }
    

</S.Container>
</S.FormContainer>
        </>

    )

};