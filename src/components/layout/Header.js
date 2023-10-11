import React, {useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import {Link} from 'react-router-dom';
import "../../styles/HeaderStyle.css"
import ListIcon from '@mui/icons-material/List';



const Header = () => {
  const[mobileOpen, setMobileOpen] = useState(false)
  // handle menu clicl 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen )
  }

  // menu drawer
  const drawer =(
    <Box onClick = {handleDrawerToggle} sx={{textAlign: "center"}}>
       <Typography color={'skyblue'} variant='h6' component="div" sx={{flexGrow: 1, my:2}} >
          <RamenDiningIcon/> 
          Foodyz
        </Typography>
        <Divider/>
          <ul className='mobile-navigation'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
    </Box>
  );
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor : "black"}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open-drawer' edge="start " sx={{ mr:2, display:{sm: "none"}}}  onClick={handleDrawerToggle}>
            <ListIcon/>
          </IconButton>
  
        <Typography color={'skyblue'} variant='h6' component="div" sx={{flexGrow: 1}}>
          <RamenDiningIcon/> 
          Foodyz
        </Typography>
        <Box sx={{display : {xs : "none", sm: "block"}}}>
          <ul className='navigation-menu'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'},
      "& .MuiDrawer-paper":{
        boxSizing: "border-box",
        width: "200px",
      }}}>
          {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
    
    </Box>
      
    </>
  )
}

export default Header
