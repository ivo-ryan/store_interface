import { useEffect, useState } from "react";
import { Navbar } from "../navbar/navbar";
import axios from "axios";
import { MenuTypes } from "../../types/menuTypes";
import * as S from './style';

export const Menu = () => {

    const [ fitness, setFitness ] = useState<MenuTypes[]>([]);
    const [ tecnolog, setTecnolog ] = useState<MenuTypes[]>([]);
    const [ moda, setModa ] = useState<MenuTypes[]>([]);

    useEffect(() => {
        const fecthData = async () => {
            const req = await axios.get("https://store-api-gbye.onrender.com/fitness");

            const res = req.data;

            setFitness(res)
        }

        fecthData()

    }, [])

    useEffect(() => {
        const fecthData = async () => {
            const req = await axios.get("https://store-api-gbye.onrender.com/tecnologia")

            const res = req.data;
            
            setTecnolog(res)
        }

        fecthData()

    }, [])

    useEffect(() => {
        const fecthData = async () => {
            const req = await axios.get("https://store-api-gbye.onrender.com/moda")

            const res = req.data;
            
            setModa(res)
        }

        fecthData()

    }, [])

    return (
        <>
        <Navbar/>
        <main>

            <S.SectionProduct>
                {
                    fitness.map(( product, index ) => {
                        return(
                            <S.Product key={index}>
                                <S.ImageContainer>

                                <img src={product.image[0].image_url} alt={product.marca} />

                                </S.ImageContainer>

                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>

                                <S.ButtonAdd>Adicionar ao carrinho</S.ButtonAdd>

                            </S.Product>
                        )
                    })
                }
            </S.SectionProduct>

            <S.SectionProduct>
                {
                    tecnolog.map(( product, index ) => {
                        return(
                            <S.Product key={index}>
                                <S.ImageContainer>

                            <img src={product.image[0].image_url} alt={product.marca} />

                            </S.ImageContainer>
                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>

                                <S.ButtonAdd>Adicionar ao carrinho</S.ButtonAdd>

                            </S.Product>
                        )
                    })
                }
            </S.SectionProduct>
            <S.SectionProduct>
                {
                    moda.map(( product, index ) => {
                        return(
                            <S.Product key={index}>
                               <S.ImageContainer>

                                <img src={product.image[0].image_url} alt={product.marca} />

                                </S.ImageContainer>

                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>

                                <S.ButtonAdd>Adicionar ao carrinho</S.ButtonAdd>

                            </S.Product>
                        )
                    })
                }
            </S.SectionProduct>
        </main>
        </>
    )
}