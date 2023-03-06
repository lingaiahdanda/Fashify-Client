import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.div`
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border : 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`


const Navbar = () => {
  let navigate = useNavigate();
  const quantity = useSelector(state=> state.cart.quantity);
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search  style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick = {()=>{
            navigate("/")
          }}>
            <h1 style={{fontWeight: 'bold'}}>Fashify</h1>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">LOGIN</Link>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlined></ShoppingCartOutlined>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper> 
    </Container>
  )
}

export default Navbar