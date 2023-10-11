import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center", bgcolor: 'black', color:"white", p:3}}>
        <Box sx={{ my: 3, "& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:2
        },
        "& svg:hover":{
            color:"skyblue",
            transform: "translateX(5px)",
            transition: "all 400ms",
        }}}>
            <InstagramIcon/>
            <TwitterIcon/>
            <MailOutlineIcon/>
            <GitHubIcon/>
        </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)" : {fontSize : '1rem' ,} }}>
            All rights reserved &copy; Foodyz 
        </Typography>
    </Box>
     
    </>
  )
}

export default Footer
