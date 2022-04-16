import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Carousel from "react-multi-carousel";
import axios from '../axios'
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/system';
import requests from '../Requests';

const useStyles = makeStyles({
    subtitle: {
        backgroundColor: '#2c2c2c', color: '#518ad4', padding: 10
    }
})

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const FanFavorites = () => {
    const classes = useStyles()

    const [fan, setFan] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNowPlaying);
            setFan(request.data.results)

            return request;
        }
        fetchData();
    }, [])

    return (
        <Grid md={12} color="white">
            <Carousel responsive={responsive}>
                {fan.map(item => (
                    <Box height="430px" width="180px" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1a1a1a', mx: 1 }}>
                        <Box>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" height="260" width="180px" />
                            <Typography>⭐{item.vote_average}</Typography>
                            <Typography sx={{ m: 1 }}>{item.title}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ m: 1 }} className={classes.subtitle}> <Box sx={{ display: 'flex', alignItems: "center" }}> <AddBoxIcon sx={{ mr: 1 }} />Watchlist</Box></Typography>

                            <Typography sx={{ display: 'flex', alignItems: "center", mt: 3, m: 2, pb: 1 }}><PlayArrowIcon sx={{ mr: 1 }} />Trailer</Typography>
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Grid>
    )
}

export default FanFavorites