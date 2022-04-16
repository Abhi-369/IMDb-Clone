import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles';
import Carousel from "react-multi-carousel";
import axios from '../axios'
import "react-multi-carousel/lib/styles.css";
import requests from '../Requests';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyles = makeStyles({
    img: {
        border: '3.5px solid #858181',
        borderTop: 'none',
        borderBottom: 'none',
    }
})



const FeatureToday = () => {
    const classes = useStyles();

    const [today, setToday] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setToday(request.data.results)
            return request;
        }
        fetchData();
    }, [])

    return (
        <Grid container>
            <Grid item md={11}>
                <Typography sx={{ my: 3 }} variant="h4" fontWeight="bold" color="#f5c518">Featured today</Typography>
                <Carousel responsive={responsive} stopAutoPlayOnHover={true} navButtonsAlwaysVisible={false} height="100px">
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${today[0]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[1]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[2]?.poster_path}`} alt="" height="250px" />
                        <Typography sx={{ my: 2 }} color="white">See the Latest Movie and TV Posters</Typography>
                    </Box>
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${today[3]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[4]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[5]?.poster_path}`} alt="" height="250px" />
                        <Typography sx={{ my: 2 }} color="white">20 New & Upcoming Movies Directed by Women</Typography>
                    </Box>
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${today[6]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[7]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[8]?.poster_path}`} alt="" height="250px" />
                        <Typography sx={{ my: 2 }} color="white">The Best Movies & Shows Coming This Spring</Typography>
                    </Box>
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${today[9]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[10]?.poster_path}`} alt="" height="250px" />
                        <img src={`https://image.tmdb.org/t/p/original/${today[11]?.poster_path}`} alt="" height="250px" />
                        <Typography sx={{ my: 2 }} color="white">`The Best TV & Movies to Watch in  {new Date().toLocaleString('default', { month: 'long' })} </Typography>
                    </Box>
                </Carousel>;
            </Grid>
            <Grid item md={1}>
            </Grid>
        </Grid>
    )
}

export default FeatureToday