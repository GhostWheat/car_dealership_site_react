import React from 'react';
import {styled} from '@mui/system';
import {Button} from '@mui/material';
import splashImage from '../../assets/images/cash-macanaya-_5lTTNE2L5I-unsplash.jpg'


interface Props{
    title:string;
}

export const Home = ( props:Props ) => {
    return (
        <h1> Hi sup fools</h1>
    )
}

// Create Styled Components with styled-components

const Root = styled('div')({
    padding:0,
    margin:0,
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
})

const HomeLogo = styled('div')({
    marginLeft: '0.45em',
})

const HomeAnchor = styled('a')({
    
})