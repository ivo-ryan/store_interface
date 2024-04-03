import { useEffect, useState } from "react";
import { Navbar } from "../navbar/navbar";
import axios from "axios";
import { DispatchTypes, MenuTypes } from "../../types/menuTypes";
import * as S from './style';
import { Link, useParams } from "react-router-dom";

export const Menu = () => {

    const { idUser } = useParams();

    const [ fitness, setFitness ] = useState<MenuTypes[]>([]);
    const [ tecnolog, setTecnolog ] = useState<MenuTypes[]>([]);
    const [ moda, setModa ] = useState<MenuTypes[]>([]);

    const [ dispatch, setDispatch ] = useState<DispatchTypes[]>([
        {
            description: '',
            image: '',
            marca: '',
            name: '',
            price: '',
            id: '',
            quantity: 0
    }
]);

    const [ user, setUser ] = useState<DispatchTypes[]>([
        {
            description: '',
            image: '',
            marca: '',
            name: '',
            price: '',
            id: '',
            quantity: 0
    }
    ]);

  
    const [ quantity, setQuantity ] = useState<number>(0);
    
   
    useEffect(() => {
        const fecthData = async () => {
            const req = await axios.get("https://store-api-gbye.onrender.com/fitness");

            const res = req.data;

            setFitness(res)

        }

        fecthData()

    }, []);

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


    useEffect(() => {
        const fetchData = async () => {
             const res = await axios.get(`https://store-api-gbye.onrender.com/user/${idUser}`)

            const req = await res.data;
            console.log(req);
            
            setUser(req.cart);
        }

        fetchData()
    },[])

    useEffect(() => {

        const newDispatch = {
            description: dispatch[0].description,
            image: dispatch[0].image,
            marca: dispatch[0].marca,
            name: dispatch[0].name,
            price: dispatch[0].price,
            id: dispatch[0].id,
            quantity: dispatch[0].quantity + quantity
        };

        const productCart = user.filter((item, index) => {
            if (item.id === dispatch[0].id) {
                console.log(item.quantity);
                
                setQuantity(item.quantity);
                

                return setTimeout(() => {
                    user.splice(index, 1);
                    user.push(newDispatch)
                }, 10);
              
            }else{
                user.push(dispatch[0]);
            }

            if (!user.length) {
               return  console.log("chegou aqui");
               
            }
        });

        
        console.log(newDispatch);
        
        console.log(user);
        console.log(productCart);
        
        
        
        
    },[dispatch[0]]);

    const handlePost =  () => {  


         setTimeout( () => {

            const fetchData = async () => {
            
            const api =  axios.create({

                baseURL: "https://store-api-gbye.onrender.com"
            });
        
            const response = await api.put(`/user/${idUser}`,{
    
                cart: user
            });
    
            console.log(response.status);

        }
        fetchData()
        }, 10);
    }

    return (
        <>
        <Navbar id={idUser}/>
        <S.MainContainer>

            <S.SectionProduct>
                {
                    fitness.map(( product, index ) => {
                        return(
                            <S.Product key={index}>
                                <S.ImageContainer>
                                <Link to={`/${idUser}/${product._id}/fitness`}>

                                <img src={product.image[0].image_url} alt={product.marca} />

                                </Link>
                                </S.ImageContainer>

                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>
                                    <div onClick={() => setDispatch([{
                                        id: product._id,
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price,
                                        quantity: 1
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
                            <Link to={`/${idUser}/${product._id}/tecnologia`}>

                            <img src={product.image[0].image_url} alt={product.marca} />

                            </Link>
                            </S.ImageContainer>

                            <p>{product.description}</p>
                            <S.PriceProduct>
                                <span >R$</span>
                                {product.price}</S.PriceProduct>

                            <div  onClick={() => setDispatch([{
                                        id: product._id,
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price,
                                        quantity: 1
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
                                <Link to={`/${idUser}/${product._id}/moda`}>

                                <img src={product.image[0].image_url} alt={product.marca} />

                                </Link>
                                </S.ImageContainer>

                                <p>{product.description}</p>
                                <S.PriceProduct>
                                    <span>R$</span>
                                    {product.price}</S.PriceProduct>

                                    <div onClick={() => setDispatch([{
                                        id: product._id,
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price,
                                        quantity: 1
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