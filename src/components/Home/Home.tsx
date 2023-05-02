import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import unsplashImage from '../../assets/images/cash-macanaya-_5lTTNE2L5I-unsplash.jpg'


interface Props {
    title: string;
}

// export const Home = ( props:Props ) => {
//     return (
//         <h1> Hi sup fools</h1>
//     )
// }

// Create Styled Components with styled-components

const Root = styled('div')({
    padding: 0,
    margin: 0,

    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${unsplashImage})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    backgroundColor: 'linen',
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'clear',
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

const AcctDiv = styled('div')({
    marginRight: '0.5em',
    marginLeft: '0.5em',
})

const AcctDropdown = styled('h1')({
    backgroundColor: 'cyan',
})

const Main = styled('main')({

})

export const Home = (props: Props) => {
    return (
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

                <AcctDiv>
                    <AcctDropdown>
                        My Account
                    </AcctDropdown>
                </AcctDiv>

            </NavbarContainer>
        
        <Main>
            Hello
        </Main>


        </Root>
    )
}