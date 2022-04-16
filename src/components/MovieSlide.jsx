import { Container, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from '../axios'
import requests from '../Requests';

const useStyles = makeStyles({
    img: {
        position: 'absolute',
        bottom: 1,
        backgroundImage: 'linear-gradient(to bottom, black, black)',
        margin: '0 0 4px 10px'
    },
    title: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        width: 600,
        right: 50,
        bottom: 20,
    },
    smalltitle: {
        color: '#f5c518'
    },
    card: {
        display: 'flex'
    },
    play: {
        border: '3px solid #fff',
        borderRadius: '50px',
        padding: '10px',
        margin: '0 10px',
    },
    smallcard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    smallContainer: {
        height: 500,
        overflow: 'auto',
    },
    line: {
        height: 100,
        position: 'absolute',
        bottom: 4,
        width: '1000px',
        zindex: 10,
        backgroundImage: 'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)'
    }
})

const MovieSlide = () => {
    const classes = useStyles()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPopular);
            setMovie(request.data.results)
            return request;
        }
        fetchData();
    }, [])

    return (
        <Grid container sx={{ width: '80vw', color: 'white', mt: 1 }} >
            <Grid item md={7.5}>
                <Carousel indicators={false} duration={500} animation="slide">
                    {
                        movie.map(movie => (
                            <Box> 
                                <Box className={classes.line} />
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" height="550px" width="1000px" />
                                <Box className={classes.card}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" height="250px" width="180px" className={classes.img} />
                                    <Box className={classes.title}>
                                        <PlayArrowIcon className={classes.play} sx={{ fontSize: 'xxx-large' }} />
                                        <Box>
                                            <Typography variant="h4">{movie.title}</Typography>
                                            <Typography variant="body1">{`${movie.overview.slice(0, 200)} ...`}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Carousel>
            </Grid>
            <Grid item md={4.5}>
                <Typography className={classes.smalltitle} sx={{ mx: 3, my: 1, mb: 3 }} variant="h6" fontWeight="bold">Up Next</Typography>
                <Box className={classes.smallContainer}>
                    {movie.map(movie => (
                        <Box className={classes.smallcard} sx={{ my: 2 }}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="hello" height="140px" width="100px" />
                            <Box width="60%">
                                <PlayArrowIcon />
                                <Box>
                                    <Typography>{movie.title}</Typography>
                                    <Typography>{movie.desc}</Typography>
                                </Box>npm start

                            </Box>
                        </Box>
                    ))}
                </Box>
                <Typography sx={{ mx: 4, py: 2, display: 'flex', alignItems: 'center' }} variant="h6" fontWeight="bold">Browse trailers <ChevronRightIcon /></Typography>
            </Grid>

        </Grid>

    )
}

export default MovieSlide