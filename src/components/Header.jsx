import React ,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [hamburger, setHamburger] = useState(false);
    return (
        <>
            <Container>
            <a href="#">
                <img src="images/logo.svg" alt="" />
            </a>

            <Menu>
                <a href="">Model S</a>
                <a href="">Model 3</a>
                <a href="">Model X</a>
                <a href="">Model Y</a>
            </Menu>
            <MenuRight>
                <a href="">Shop</a>
                <a href="">Account</a>
                <CustomMenu onClick={() => setHamburger(true)}/>  
            </MenuRight>

            </Container>
            
            <HamburgerNav show={hamburger}>
            <Wrapper>
            <CloseContainer onClick={() => setHamburger(false)}/>
            </Wrapper>
            <li> <a href="">Existing Inventory</a> </li>
            <li> <a href="">Used Inventory</a></li>
            <li> <a href="">Trade In</a> </li>
            <li> <a href="">Test Drive</a> </li>
            <li> <a href="">Cybertruck</a> </li>
            <li> <a href="">Roadster</a> </li>
            <li> <a href="">Semi</a> </li>
            <li> <a href="">Charging</a> </li>
         
            </HamburgerNav>
        </>
        
    )
}

export default Header

const Container = styled.div`
height: 60px;
padding: 0 20px;
left: 0;
right:0;
top: 0;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;

`

const Menu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex: 1;
a{
    font-weight: 600;
    font-size: 20px;
    color: black;
    padding: 0 8px;

}
@media(max-width:768px){
    display: none;
}
`

const MenuRight = styled.div`
    display: flex;
    align-items: center;
a{
    font-weight: 600;
    font-size: 20px;
    color: black;
    margin-right: 10px;


}

`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`

const HamburgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 10;
padding: 20px;
transform: ${(props) => props.show ? "translateX(0)" : "translateX(100%)"};
transition: transform .5s ;
li{
    list-style-type: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
        font-weight: 600;
    }
}

`

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
`

const CloseContainer = styled(CloseIcon)`


`
