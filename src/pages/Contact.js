import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Contact = () => {
  return (
    <Layout>
     <Box sx={{my:10, ml: 10, "& h4":{fontWeight:"bold", mb: 2}}}>
      <Typography variant='h4'>
        Contact Us!
      </Typography>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
     </Box>
     <Box sx={{ m : 3, width:"600px", ml:10, "@media (max-width:600px)":{
      width:"300px"
     }}}>
      <TableContainer component={Paper}>
        <Table aria-label='contact table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:"black", color:"white"}} align="center">
                Contact Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <ContactPhoneIcon sx={{color:'red', pt: 2}}/> 1800 000 000 (toll-free)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <EmailIcon sx={{color:'green', pt: 2}}/> help@foodyz.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <PhoneInTalkIcon sx={{color:'blue', pt: 2}}/> 12345678 
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </TableContainer>
     </Box>
    </Layout>
  )
}

export default Contact
