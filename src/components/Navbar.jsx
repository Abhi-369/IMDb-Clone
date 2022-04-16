import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import { Box } from '@mui/system'
import React from 'react'

const useStyles = makeStyles({
    nav: {
        "@media (min-width: 4000px)": {
            width: '400px'
        }
    },
    Leftnav: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 400,
        "@media (min-width: 1280px)": {
            display: 'none'
        }
    },
    Rightnav: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 300
    }
})

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar sx={{ height: '10', position: 'fixed', width: '100vw', backgroundColor: '#121212' }} className={classes.nav}>
                <Toolbar sx={{ display: 'flex', width: "80vw", margin: 'auto' }}>

                    <Typography variant="h5" sx={{ backgroundColor: '#f5c518', px: 1, color: 'black', mx: 2, borderRadius: '15%' }} fontWeight="bold">IMDb</Typography>

                    <MenuIcon />
                    <Typography>Menu</Typography>

                    <Box sx={{ display: 'flex', flexGrow: 1, mx: 2, p: 1, backgroundColor: 'white', borderRadius: 10 }}>
                        <Typography sx={{ borderRight: 2, color: 'black', px: 1 }}>All</Typography>
                        <input type="text" placeholder="Search IMDd" style={{ marginLeft: '10px', outline: 'none', border: 'none', width: '100%' }} />
                        <SearchIcon sx={{ color: 'black' }} />
                    </Box>
                    <Typography sx={{ mr: 2 }}>IMDbPro</Typography>
                    <Box className={classes.Rightnav}>

                        <AddBoxIcon sx={{ mr: -3 }} />
                        <Typography>Watchlist</Typography>

                        <Typography>Sign in</Typography>

                        <Typography>EN</Typography>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar