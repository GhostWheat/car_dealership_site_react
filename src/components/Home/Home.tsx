import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import unsplashImage from '../../assets/images/cash-macanaya-_5lTTNE2L5I-unsplash.jpg'
import { Link } from 'react-router-dom';
import { BorderAll, MarginRounded } from '@mui/icons-material';
import ScaledText from 'react-scale-text';


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
    backgroundImage: `linear-gradient(to bottom, rgba(10,133,203, 0.5),  rgba(0,0,0,0) 0%, rgba(0,0,0, .3) ), url(${unsplashImage})`,
    // backgroundImage: `linear-gradient(to bottom, rgba(10,133,203, 0.5) 5.5%, rgba(204,255,255, 0.5) 6%, rgba(204,255,255, 0.5) 6.3%, rgba(204,255,255, 0) 6.5%, rgba(0,0,0,0) 0%, rgba(0,0,0, .3) ), url(${unsplashImage})`,
    // backgroundImage: `linear-gradient(to bottom, rgba(204,255,255, 0.8) 2%, rgba(204,255,255, 0.8) 2%, rgba(204,255,255, 0.75) 2%, rgba(204,255,255, 0.75) 2%, rgba(0,0,0,0) 40%, rgba(0,0,0, .4)), url(${unsplashImage})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    // backgroundColor: 'linen',
})

const NavbarContainer = styled('div')({
    minHeight: '64px',
    backgroundColor: 'rgba(10,133,203, 0.5)',
    borderBottom: '3px rgba(204,255,255, 0.4) groove',
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    // backgroundColor: 'clear',
})

const NavList = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    display: 'flex',
})

const NavA = styled(Link)({
    display: 'flex',
    padding: '0.5em',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: 12,
    // justifyItems: 'end',
    // alignContent: 'baseline',
    alignItems: 'center',
    justifyContent: 'center',
    // border: '1px solid black'
    // maxHeight: '10px'
})

const Logo = styled('div')({
    height: '60px',
    width: '60px',
    display:'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.5em',
    marginLeft: '0.5em',
    border: 'solid white 1px',
    borderRadius: '100%',
    position: 'absolute',
    left: '50%'
})

const LogoA = styled('a')({
    color: 'white',
    listStyle: 'none',
    fontSizeAdjust: 'inherit',
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const AcctDiv = styled('div')({
    marginRight: '0.5em',
    marginLeft: '0.5em',
})

const AcctLink = styled(Link)({
    // backgroundColor: 'cyan',
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const Main = styled('main')({
    // backgroundImage: `linear-gradient(to bottom, rgba(10,133,203, 0.5) 5.5%, rgba(204,255,255, 0.5) 6%, rgba(204,255,255, 0.5) 6.3%, rgba(204,255,255, 0) 6.5%, rgba(0,0,0,0) 0%, rgba(0,0,0, .3) ), url(${unsplashImage})`,
    // backgroundImage: `linear-gradient(to bottom, rgba(204,255,255, 0.8) 2%, rgba(204,255,255, 0.8) 2%, rgba(204,255,255, 0.75) 2%, rgba(204,255,255, 0.75) 2%, rgba(0,0,0,0) 40%, rgba(0,0,0, .4)), url(${unsplashImage})`,
    borderTop: '3px rgba(204,255,255, 0.4) ridge',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    // backgroundColor: 'linen',
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'

})

export const Home = (props: Props) => {
    return (
        <Root>
            <NavbarContainer>
                <NavList>
                    <NavA to='/'>Home</NavA>
                    <NavA to='/dashboard'>My Dashboard</NavA>
                    <NavA to='/signin'>Sign In</NavA>
                </NavList>

                <Logo>
                    <LogoA href='/'>BRAND</LogoA>
                </Logo>

                <AcctDiv>
                    <AcctLink to='/account'>My Account</AcctLink>
                </AcctDiv>

            </NavbarContainer>

            <Main>
                <MainText id="maintext">
                    <h1>{props.title}</h1>
                    <p>CAR IS GOOD</p>
                    <Button sx={{ marginTop: '10px', boxShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000' }} color='inherit' variant='outlined'><i>GO TO CARS</i></Button>
                </MainText>
            </Main>


        </Root>
    )
}