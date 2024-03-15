import { FormEvent, useState } from 'react';
import { Navbar } from '../../components/navbar/navbar';
import * as S from './style';

export const Login = () => {

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
    console.log(user);
    console.log(email);
    
    
    
    const handleClickUser = (event:any) => {
        setUser(event.target.value)
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

    const handleClickPass = (event:any) => {
        setPassword(event.target.value)
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
    
        // if (!user.length || !password.length) {
        //     return
        // };
    
        // if (password.length <= 4 || password.length > 15 || re.test(user) === false ) {
        //     return   
            
        // }
        
        
        // setLoading(true)
        
        // setDispatch(true);
        // const api =  axios.create({
        //     baseURL: "https://animes-api-k6xs.onrender.com"
        // })
    
        // const response = await api.post("/user",{
        //     email: user,
        //     senha: password
        // })
    
        // console.log(response.status);
    
    
        // setLoading(false);
    
      }

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

        <label htmlFor="user">User </label>

        <input 
        type="text" 
        name="user" 
        id="user" 
        autoComplete='true'
        onChange={handleClickUser}
      />

    </S.InputContainerUser>

    <S.ValidUser display={displayUser}><p>Informe um nome de Usuário válido!</p> </S.ValidUser>

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

    <S.InputContainerPass colorb=''>

        <label htmlFor="password">Senha</label>

        <input 
        type="password" 
        name="senha" 
        id="password" 
        onChange={handleClickPass}
        />

    </S.InputContainerPass>

        <S.ValidPass display=''>
        {/* <BiXCircle/> */}
            <p>A senha deve ter entre 4 e 15 caracteres!</p>
        </S.ValidPass>

    </S.BoxInput> 
    <S.Submit>
            <button>Cadastrar</button>
  
    </S.Submit>

</form>

    </S.FormC> 

    <S.MsgSucesso>
        <p>Usuário cadastrado com sucesso!</p>
    </S.MsgSucesso>  
    

</S.Container>
</S.FormContainer>
        </>

    )

}