import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
};

const Originals = () => {
    const [original, setOriginal] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchOriginal);
            setOriginal(request.data.results)
            return request;
        }
        fetchData();
    }, [])

    return (
        <Box color="white">
            <Carousel responsive={responsive}>
                {original.map(item => (
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" height="230px" width="99%" />

                        <Typography color="#1E90FF">{item.name || item.original_name}</Typography>
                        <Typography width="94%">{item.overview.substring(0, 100)}...</Typography>
                    </Box>
                ))}
            </Carousel>
        </Box>
    )
}

export default Originals