export interface MenuTypes{
    description: string,
    image: [
        {
            id: string,
            image_url: string
        }
    ],
    marca: string,
    name: string,
    price: string,
    _id: string
}

export interface DispatchTypes{
    id: string
    description: string,
    image: string,
    marca: string,
    name: string,
    price: string,

}