import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import unsplashImage from '../../assets/images/cash-macanaya-_5lTTNE2L5I-unsplash.jpg'
import { Link } from 'react-router-dom';

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

    backgroundImage: `linear-gradient(to bottom, rgba(204,255,255, 0.8) 2%, rgba(204,255,255, 0.8) 2%, rgba(204,255,255, 0.75) 2%, rgba(204,255,255, 0.75) 2%, rgba(0,0,0,0) 40%, rgba(0,0,0, .4)), url(${unsplashImage})`,
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

const NavA = styled(Link)({
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
    // backgroundColor: 'cyan',
})

const Main = styled('main')({

})

export const Home = (props: Props) => {
    return (
        <Root>
            <NavbarContainer>
                <NavList>
                    <NavA to='/'>Home</NavA>
                    <NavA to='About'>About</NavA>
                    <NavA to='/dashboard'>My Dashboard</NavA>
                    <NavA to='/signin'>#</NavA>
                </NavList>

                <Logo>
                    <LogoA href='/'>COMPANYBRANDWEBSITE</LogoA>
                </Logo>

                <AcctDiv>
                    <AcctDropdown>
                        My Account
                    </AcctDropdown>
                </AcctDiv>

            </NavbarContainer>
        
        <Main>
            Hello
            <Button></Button>
        </Main>


        </Root>
    )
}