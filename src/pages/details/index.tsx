import { useParams } from "react-router"
import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuTypes } from "../../types/menuTypes";
import * as S from './style';
import { DispatchProps } from "../../types/detailsTypes";

export const Details = () => {

    const { id, name, user } = useParams();

    const [ product , setProduct ] = useState<MenuTypes[]>([]);

    const [ paginationImg , setPaginationImg ] = useState<number>(1);
    const [ userCart, setUserCart ] = useState([
        {
            description: '',
            image: '',
            marca: '',
            name: '',
            price: '',
            id: ''
    }
    ]);

    const [ dispatch, setDispatch ] = useState<DispatchProps>( {
            description: '',
            image: '',
            marca: '',
            name: '',
            price: '',
            id: ''
    });    
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://store-api-gbye.onrender.com/${name}/${id}`);

            const res = await req.data;
            
            setProduct([res]);
            setDispatch({
                description: res.description,
                id: res._id,
                image: res.image[0].image_url,
                marca: res.marca,
                name: res.name,
                price: res.price
            });
        };

        fetchData();

    }, []);

    useEffect(() => {
        const fetchData = async () => {
             const res = await axios.get(`https://store-api-gbye.onrender.com/user/${user}`)

            const req = await res.data;
            setUserCart(req.cart);
        }

        fetchData()
    },[]);

    const handlePost =  () => {  

        const data = () => {
            
            
            const ids = userCart.map(i => i?.id)

            const filterId = ids.filter((item) => item === dispatch.id 
             );

            if (filterId.length > 0) {

                return console.log("item adicionado");
                
            }else{
                
                console.log("Chegou aqui!")
               return userCart.push(dispatch)
            }
            
    }

    data()

        setTimeout( () => {

           const fetchData = async () => {
           
           const api =  axios.create({

               baseURL: "https://store-api-gbye.onrender.com"
           });
       
           const response = await api.put(`/user/${user}`,{
   
               cart: userCart
           });
   
           console.log(response.status);

       }
       fetchData()
       }, 10)
   }

    return (
        <>
            <Navbar id={user}/>

            <S.MainContainer>

                <S.ContainerProduct>

                    {
                        product.map((item , index) => {
                            return (
                            <S.ImgSection key={index}>    
                            <S.ImgList>
                                <ul>
                                    {
                                        item.image.map((img, index) => {
                                            return (
                                                <li key={index} onClick={() => setPaginationImg(Number(img.id))}>
                                                        <p>
                                                            <img src={img.image_url} alt={item.name} />
                                                        </p>
                                                    </li>
                                            )
                                        })
                                    }

                                </ul>
                            </S.ImgList>
                            <S.MainImg>
                                <img src={item.image[paginationImg -1].image_url} alt={item.name} />
                            </S.MainImg>
                    </S.ImgSection>
                        )
                    })
                }

                    {
                        product.map((info, index) => {
                            return (
                                <S.InfoContainer key={index}>
                        <S.Description>
                            <p>
                                {info.description}
                            </p>
                            <p>Marca: {info.marca}</p>
                        </S.Description>

                        <S.ContainerPrice>
                            <p>
                                <span>R$</span>{info.price}
                            </p>
                        </S.ContainerPrice>

                        <S.SecurityContainer>
                            <ul>
                                <li><img src="https://m.media-amazon.com/images/G/32/A2I-Convert/mobile/IconFarm/icon-payments-and-security._CB643514857_.png" alt="Icon Farm Peyments" />
                                <p>Pagamento seguro</p></li>
                                <li><img src="https://m.media-amazon.com/images/G/32/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB406595335_.png" alt="Icon farm delive" />
                                <p>Enviado em até 24 horas</p></li>
                                <li><img src="https://m.media-amazon.com/images/G/32/A2I-Convert/mobile/IconFarm/icon-returns._CB406595335_.png" alt="Icon farm returns" />
                                <p>Política de devolução</p>
                                </li>
                            </ul>
                        </S.SecurityContainer>
                    </S.InfoContainer>
                            )
                        })
                    }


                    </S.ContainerProduct>
                        <S.ButtonContainer onClick={handlePost}>
                            <button>
                                Adicionar ao carrinho
                            </button>
                        </S.ButtonContainer>

                
            </S.MainContainer>
        </>
    )
}