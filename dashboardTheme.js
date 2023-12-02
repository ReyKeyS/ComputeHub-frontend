import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const dashboardTheme = createTheme({
    palette: {
        primary: {
            main: '#ffa31a',
            oranye:"#ffa31a",
            abu_abu:"#808080",
            abu_gelap:"#292929",
            abu_super_gelap:"#1b1b1b",
            putih:"#ffffff"
        },
        secondary: {
            main: '#f44336',
        },
    },
})

export default dashboardTheme