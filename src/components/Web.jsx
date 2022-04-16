import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import axios from '../axios';

const Web = () => {

    const [web, setWeb] = useState([])

    useEffect(() => {

    }, [])

    return (
        <Box color="white">
            <Box sx={{ display: 'flex' }}>
                {web.map(item => (
                    <Box sx={{ mx: 1 }}>
                        <img src={item.url} alt="" height="150px" />
                        <Box>
                            <Typography variant="body2">{item.desc}</Typography>
                            <Typography variant="body2">{item.tag}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Web