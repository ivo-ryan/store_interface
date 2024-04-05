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

    const [ index, setIndex ] = useState<number>(0)
   console.log(index);
   
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
            
            setUser(req.cart);
        }

        fetchData()
    },[]);
    
    console.log(user);
    

    useEffect(() => {

         const data = () => {
            
            
            const ids = user.map(i => i?.id)

            const filterId = ids.filter((item) => item === dispatch[0].id 
             );

             const newProduct:DispatchTypes[] = user.filter((item, i) => {
                if (item.id === filterId[0]) {
                    setIndex(i)
                    return item.id === filterId[0]
                    
                }
               }) 

            console.log(newProduct);
            if (filterId.length > 0) {

                return user.filter((item) => {
                   
                    if(item.id === filterId[0]){
                    setTimeout(() => {
                        user.splice(index, 1)
                        user.splice(index, 1)
                        return user.push({
                         description: newProduct[0].description,
                         image: newProduct[0].image,
                         marca: newProduct[0].marca,
                         name: newProduct[0].name,
                         price: newProduct[0].price,
                         id: newProduct[0].id,
                         quantity: newProduct[0].quantity + 1
                        })
                    }, 10);
            }

                })
                
            }else{
                
                console.log("Chegou aqui!")
               return user.push(dispatch[0])
            }
            
    }

    data()

        
    },[dispatch[0]]);

    

    const handlePost =  () => {  

         setTimeout( () => {

            const fetchData = async () => {;
            
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
                                    <div onClick={() => {setDispatch([{
                                        id: product._id,
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price,
                                        quantity: 1
                                    }])
                                    handlePost()
                                    } } >

                            <S.Button>Adicionar ao carrinho</S.Button>
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

                            <div  onClick={() => {setDispatch([{
                                        id: product._id,
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price,
                                        quantity: 1
                                    }])
                                    handlePost()}}>
                            
                            <S.Button >Adicionar ao carrinho</S.Button>
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

                                    <div onClick={() => {setDispatch([{
                                        id: product._id,
                                        name: product.name,
                                        marca: product.marca,
                                        description: product.description,
                                        image: product.image[0].image_url,
                                        price: product.price,
                                        quantity: 1
                                    }])
                                    handlePost()}}>

                                   <S.Button >Adicionar ao carrinho</S.Button>
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