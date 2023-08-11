import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SwipeableDrawer from './SwipeableDrawer';

function appBarLabel(label: string) {
  return (
    <Toolbar sx={{backgroundColor:"lightblue"}}>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,backgroundColor:'none'}}>
        <SwipeableDrawer />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1,color:'black' }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {appBarLabel('比較ページ')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}