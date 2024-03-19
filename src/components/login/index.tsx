import { BiXCircle } from 'react-icons/bi';
import * as S from './style';
interface LoginProps {
    display: string,

    handleClickDisplay: () => void
}

export const Login = ({ display, handleClickDisplay }: LoginProps) => {

    return(
        <S.SectionContainer display={display}>
            <div onClick={() => handleClickDisplay()}>
                <BiXCircle/>
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
     />

 </S.InputContainerPass>

 </S.BoxInput> 
 <S.Submit>

 </S.Submit>

</form>
        </S.SectionContainer>
    )
}