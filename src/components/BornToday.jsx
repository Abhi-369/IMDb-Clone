import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import { makeStyles } from '@mui/styles';
import axios from '../axios'
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/system';
import requests from '../Requests';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles({
    image: {
        height: '100%',
        width: '99.5%',
        marginBottom: '10px',
    }
})

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
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

const BornToday = () => {
    const classes = useStyles()

    const [today, setToday] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTodayPopular);
            setToday(request.data.results)
            return request;
        }
        fetchData();
    }, [])

    return (
        <Box color="white">
            <Carousel responsive={responsive}>
                {today.map(item => (
                    <Box>
                        <Box>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" className={classes.image} />
                        </Box>
                        <Typography sx={{color: "#518ad4", fontSize: "20px", paddingTop: "1px", m: 1}}>{item.original_title || item.name}</Typography>
                        <Typography width="550px" sx={{mx: 1}}>{item.overview.substring(0, 100)}...</Typography>
                    </Box>
                ))}
            </Carousel>

        </Box>
    )
}

export default BornToday