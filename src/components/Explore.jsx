import { Typography, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Carousel from "react-multi-carousel";
import axios from '../axios'
import "react-multi-carousel/lib/styles.css";
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

const Explore = () => {

    const classes = useStyles()
    const [explore, setExplore] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTvPopular);
            setExplore(request.data.results)
            return request;
        }
        fetchData();
    }, [])

    return (
        <Box>
            <Box color="white" sx={{ display: 'flex', justifyContent: 'space-evenly', mb: 5, fontSize: 15, fontWeight: 'bold' }} width="80%" fontFamily="sans-serif">
                <span>PRIME VIDEO</span>
                <span>NETFLIX</span>
                <span>HOTSTAR</span>
                <span>MX PLAYER</span>
                <span>JIOCINEMA</span>
                <span>SONYLIV</span>
                <span>EROSNOW</span>
                <span>VOOT</span>

            </Box>
            <Grid md={12} color="white">
                <Carousel responsive={responsive}>
                    {explore.map(item => (
                        <Box height="430px" width="180px" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#1a1a1a', mx: 1 }}>
                            <Box>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" height="260px" width="180px" />
                                <Typography>⭐{item.vote_average}</Typography>
                                <Typography sx={{ m: 1 }}>{item.name}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ m: 1 }} className={classes.subtitle}><Box sx={{ display: 'flex', alignItems: "center" }}> <AddBoxIcon sx={{ mr: 1 }} />Watchlist</Box></Typography>

                                <Typography sx={{ display: 'flex', alignItems: "center", mt: 3, m: 2, pb: 1 }}><PlayArrowIcon sx={{ mr: 1 }} />Trailer</Typography>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Grid>
        </Box>
    )
}

export default Explore