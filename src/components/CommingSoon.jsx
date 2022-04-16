import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import axios from '../axios'
import "react-multi-carousel/lib/styles.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box } from '@mui/system';
import requests from '../Requests';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const CommingSoon = () => {

    const [soon, setSoon] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchUpcoming);
            setSoon(request.data.results)
            return request;
        }
        fetchData();
    }, [])

    return (
        <Box color="white">
            <Carousel responsive={responsive}>
                {soon.map(item => (
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" height="230px" width="370px" />

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AddBoxIcon sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="body2">{item.release_date}</Typography>
                                <Typography width="400px">{item.desc}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Carousel>

        </Box>
    )
}

export default CommingSoon