import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';

import PhoneIcon from '@mui/icons-material/Phone';

import theme from './theme';
import {ThemeProvider} from '@mui/material/styles';

import reportWebVitals from './reportWebVitals';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import styled from "styled-components";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = styled.div`
  margin: 16px;
`;


root.render(
    <ThemeProvider theme={theme}>
        <Container>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <PhoneIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Agenda Telefônica
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <App>
                <Home/>
            </App>
        </Container>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
