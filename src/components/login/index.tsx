import { BiXCircle } from 'react-icons/bi';
import * as S from './style';
interface LoginProps {
    display: string,

    handleClickDisplay: () => void,

    setEmail: (value: React.SetStateAction<string>) => void,

    setPassWord: (value: React.SetStateAction<string>) => void
}

export const Login = ({ display, handleClickDisplay , setEmail , setPassWord }: LoginProps) => {

    const handleChangeEmail = (event:any) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event:any) => {
        setPassWord(event.target.value)
    }

    return(
        <S.SectionContainer display={display}>
            <div onClick={() => handleClickDisplay()}>
                <BiXCircle/>
            </div>

            <div>
                <h2>Digite  seu email e senha cadastradas</h2>
            </div>
<form >


<S.BoxInput>

 <S.InputContainer >

     <label htmlFor="email">Email </label>

     <input 
     type="email" 
     name="email ou numero" 
     id="email" 
     autoComplete='true'
     onChange={handleChangeEmail}
   />

 </S.InputContainer>

 </S.BoxInput>

 <S.BoxInput>

 <S.InputContainerPass >

     <label htmlFor="password">Senha</label>

     <input 
     type="password" 
     name="senha" 
     id="password"
     onChange={handleChangePassword} 
     />

 </S.InputContainerPass>

 </S.BoxInput> 
 <S.Submit>

 </S.Submit>

</form>

<div>
    <h2>
        Ainda não é cadastrado? 
    </h2>
</div>
        </S.SectionContainer>
    )
}