import { useEffect, useState } from "react";
import { Navbar } from "../navbar/navbar";
import axios from "axios";
import { DispatchTypes, MenuTypes } from "../../types/menuTypes";
import * as S from './style';
import { Link, useParams } from "react-router-dom";

export const Menu = () => {

    const { id } = useParams();

    const [ fitness, setFitness ] = useState<MenuTypes[]>([]);
    const [ tecnolog, setTecnolog ] = useState<MenuTypes[]>([]);
    const [ moda, setModa ] = useState<MenuTypes[]>([]);

    const [ dispatch, setDispatch ] = useState<DispatchTypes[]>([
        {
        description: '',
        image: '',
        marca: '',
        name: '',
        price: ''
    }
]);

    const [ user, setUser ] = useState([
        {
            description: '',
            image: '',
            marca: '',
            name: '',
            price: ''
        }
    ]);
   
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

    }, []);

    
    const handlePost = async () => {  
        
        const res = await axios.get(`https://store-api-gbye.onrender.com/user/${id}`)

            const req = await res.data;
            setUser(req.cart);
   
        const api =  axios.create({
            baseURL: "https://store-api-gbye.onrender.com"
        });
    
        const response = await api.put(`/user/${id}`,{

            cart: dispatch[0]
        });

        console.log(response.data);
      
    }

    return (
        <>
        <Navbar />
        <S.MainContainer>

            <S.SectionProduct>
                {
                    fitness.map(( product, index ) => {
                        return(
                            <S.Product key={index}>
                                <S.ImageContainer>
                                <Link to={`/product/${product._id}/fitness`}>

                                <img src={product.image[0].image_url} alt={product.marca} />

                                </Link>
                                </S.ImageContainer>

                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>
                                    <div onClick={() => setDispatch([{
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price
                                    }]) } >

                            <S.Button onClick={() => handlePost()}>Adicionar ao carrinho</S.Button>
                                    </div>


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
                            <Link to={`/product/${product._id}/tecnologia`}>

                            <img src={product.image[0].image_url} alt={product.marca} />

                            </Link>
                            </S.ImageContainer>

                            <p>{product.description}</p>
                            <S.PriceProduct>
                                <span >R$</span>
                                {product.price}</S.PriceProduct>

                            <div  onClick={() => setDispatch([{
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price
                                    }])}>
                            
                            <S.Button onClick={() => handlePost()}>Adicionar ao carrinho</S.Button>
                                </div>

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
                                <Link to={`/product/${product._id}/moda`}>

                                <img src={product.image[0].image_url} alt={product.marca} />

                                </Link>
                                </S.ImageContainer>

                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>

                                    <div onClick={() => setDispatch([{
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price
                                    }])}>

                                   <S.Button onClick={() => handlePost()}>Adicionar ao carrinho</S.Button>
                                        </div>


                            </S.Product>
                        )
                    })
                }
            </S.SectionProduct>
        </S.MainContainer>
        </>
    )
}