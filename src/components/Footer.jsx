import { Box, Typography } from '@mui/material'
import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'

const Footer = () => {
    return (
        <Box color="white" sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', fontFamily: 'sans-serif' }} height="350px" >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px', mt:5 }} fontSize={30}>
                <AiFillFacebook cursor="pointer"/>
                <AiFillInstagram cursor="pointer"/>
                <BsTwitch cursor="pointer"/>
                <AiOutlineTwitter cursor="pointer"/>
                <AiFillYoutube cursor="pointer"/>
            </Box>
            <Box sx={{ display: 'flex', listStyle: 'none', justifyContent: 'space-evenly', alignItems: 'center', mb:-2 }} width="800px" >
                <li> <a> Get the IMDb App</a></li>
                <li> <a> Help</a></li>
                <li> <a>  Site Index</a></li>
                <li> <a> IMDbPro</a></li>
                <li> <a> Box Office Mojo</a></li>
                <li> <a>IMDb Developer </a></li>
            </Box>
            <Box sx={{ display: 'flex', listStyle: 'none', justifyContent: 'space-evenly', alignItems: 'center' }} width="850px">
                <li> <a> Press Room </a></li>
                <li> <a> Advertising</a></li>
                <li> <a> Jobs</a></li>
                <li> <a>  Conditions of Use</a></li>
                <li> <a> Privacy Policy</a></li>
                <li> <a>Interest-Based Ads </a></li>
            </Box>
            <Typography>an amazon company</Typography>
            <Typography color="silver" variant="body2">&copy; 1990-2022 by IMDb.com, inc.</Typography>
        </Box>

    )
}

export default Footer