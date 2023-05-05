import React, { useState } from 'react';
import {
    Drawer as MUIDrawer,
    ListItem, 
    List, 
    ListItemText, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline, 
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material';
import { ChevronLeft } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/themes";

const drawerWidth = 240;

const myStyles = {
    appBar: {
        transition: theme.transitions.create(['margin','width'])
    }
}





export const Dashboard = () => {
    return (
      <div>Dashboard</div>
    )
  }