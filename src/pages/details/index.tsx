import { useParams } from "react-router"
import { Navbar } from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuTypes } from "../../types/menuTypes";
import * as S from './style';

export const Details = () => {

    const { id, name } = useParams();
    
    const [ product , setProduct ] = useState<MenuTypes[]>([]);

    const [ paginationImg , setPaginationImg ] = useState<number>(1)
    
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(`https://store-api-gbye.onrender.com/${name}/${id}`);

            const res = await req.data;
            console.log(res);

            setProduct([res])
            
        }

        fetchData()

    }, [])



    return (
        <>
            <Navbar/>

            <S.MainContainer>
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

                        <div>
                            <p>
                                {info.price}
                            </p>
                        </div>
                    </S.InfoContainer>
                            )
                        })
                    }

                    <section>
                        <div>
                            Quantidade + 1 -
                        </div>
                        <div>
                            <button>
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </section>

                
            </S.MainContainer>
        </>
    )
}