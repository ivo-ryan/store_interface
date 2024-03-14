import { Navbar } from '../../components/navbar/navbar';
import * as S from './style';

export const Login = () => {
    return (

        <>
    <Navbar/>

<S.FormContainer >

<S.Container>
    <header>
        <h1>Cadastre-se</h1>
    </header>
<S.FormC>

<form >

   <S.BoxInput>

    <S.InputContainer colorb=''>

        <label htmlFor="user">User </label>

        <input 
        type="text" 
        name="user" 
        id="user" 
        autoComplete='true'
      />

    </S.InputContainer>

    <S.Valid display=''><p>Informe um nome de Usuário válido!</p> </S.Valid>

    </S.BoxInput>

   <S.BoxInput>

    <S.InputContainer colorb=''>

        <label htmlFor="email">Email </label>

        <input 
        type="email" 
        name="email ou numero" 
        id="email" 
        autoComplete='true'
      />

    </S.InputContainer>

    <S.Valid display=''><p>Informe um email válido!</p> </S.Valid>

    </S.BoxInput>

    <S.BoxInput>

    <S.InputContainerPass colorb=''>

        <label htmlFor="password">Senha</label>

        <input 
        type="password" 
        name="senha" 
        id="password" 
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