import React from 'react';
import {styled} from '@mui/system';
import {Button} from '@mui/material';
import splashImage from '../../assets/images/cash-macanaya-_5lTTNE2L5I-unsplash.jpg'


interface Props{
    title:string;
}

// export const Home = ( props:Props ) => {
//     return (
//         <h1> Hi sup fools</h1>
//     )
// }

// Create Styled Components with styled-components

const Root = styled('div')({
    padding:0,
    margin:0,
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
})

const Logo = styled('div')({
    marginRight: '0.5em',
    marginLeft: '0.5em',
})

const LogoA = styled('a')({
    color: 'black',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'underline dotted'
})

const NavList = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    display: 'flex',
})

const NavA = styled('a')({
    display: 'block',
    padding: '1em',
    color: 'lightgrey',
    textDecoration: 'none',
})

const Main = styled('main')({
    backgroundImage: `linear gradient(green,green,url(${splashImage}))`
})

export const Home = (props:Props) => {
    return(
        <Root>
            <NavbarContainer>
                <NavList>
                    <NavA href='#'>Home</NavA>
                    <NavA href='#'>About</NavA>
                    <NavA href='#'>My Dashboard</NavA>
                    <NavA href='#'>#</NavA>
                </NavList>

                <Logo>
                    <LogoA href='#'>COMPANYBRANDWEBSITE</LogoA>
                </Logo>



            </NavbarContainer>





        </Root>
    )
}