import { FaSpinner } from "react-icons/fa";
import * as S from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Loading = () => {
    return (
        <S.LoadingContainer>
            <div>
            <FaSpinner className="spinner"/>
            <AiOutlineShoppingCart className="cart"/>
            </div>
        </S.LoadingContainer>
    )
}