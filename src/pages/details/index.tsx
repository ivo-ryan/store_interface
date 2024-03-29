import { useParams } from "react-router"
import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuTypes } from "../../types/menuTypes";
import * as S from './style';
import { LocProps } from "../../types/detailsTypes";

export const Details = () => {

    const { id, name, user } = useParams();

    const [ product , setProduct ] = useState<MenuTypes[]>([]);

    const [ paginationImg , setPaginationImg ] = useState<number>(1);

    const [ cep , setCep ] = useState<string>('');
    const [ infoLoc , setInfoLoc ] = useState<LocProps>({
        bairro: '',
        localidade: '',
        logradouro: '',
        uf: '',
    })
    
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://store-api-gbye.onrender.com/${name}/${id}`);

            const res = await req.data;

            setProduct([res]);
            
        };

        fetchData();

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://viacep.com.br/ws/${Number(cep)}/json`);

            const res = req.data
            console.log(res);
            setInfoLoc(res)
            
        }

        fetchData();

    }, [cep.length === 8]);


    const handleLoc = (event:any) => {
        if(event.target.value.length === 8){
            setCep(event.target.value)
        }else{
        return
    }

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
                                R$ <span>{info.price}</span>
                            </p>
                        </S.ContainerPrice>
                    </S.InfoContainer>
                            )
                        })
                    }

                    </S.ContainerProduct>

                    <S.DispatchContainer>

                        <div>
                            <label htmlFor="loc">Calcular Frete </label>
                            <input type="text" id="loc" onChange={handleLoc}/>

                            <div>
                                {
                                    infoLoc.bairro ?  (<S.InfoL>
                                    <h3>Bairro :</h3> <p>{infoLoc.bairro}</p>
                                </S.InfoL> ): null
                                }

{
                                    infoLoc.localidade ?  (<S.InfoL>
                                    <h3>Cidade :</h3> <p>{infoLoc.localidade}
                                    </p>
                                </S.InfoL > ): null
                                }
                                {
                                    infoLoc.logradouro ?  (<S.InfoL>
                                    <h3>Logradouro :</h3> <p>{infoLoc.logradouro}</p>
                                </S.InfoL> ): null
                                }
                                {
                                    infoLoc.uf ?  (<S.InfoL>
                                    <h3>Estato :</h3> <p>{infoLoc.uf}</p>
                                </S.InfoL> ): null
                                }
                            </div>
                        </div>

                        <S.ButtonContainer>
                            <button>
                                Adicionar ao carrinho
                            </button>
                        </S.ButtonContainer>
                    </S.DispatchContainer>

                
            </S.MainContainer>
        </>
    )
}