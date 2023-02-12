import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;
    background-color: rgba(0,0,0.2,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: all 1s ease;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f5fbfd;
    &:hover ${Info}{
         opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined></ShoppingCartOutlined>
            </Icon>
            <Icon>
                <SearchOutlined></SearchOutlined>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined></FavoriteBorderOutlined>
            </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem