import { Link, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/system';

const useStyles = makeStyles({
    link: {
        '&:hover': {
            textDecoration: "underline"
        }
    }
})

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

const News = () => {
    const classes = useStyles()
    const [news, setNews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=390967da48ac4a4193ef4ecbb63b7135`)
                .then((res) => res.json())
                .then((data) => setNews(data.articles));
        }

        fetchData();
    }, [])

    return (
        <Box color="white">
            <Carousel responsive={responsive}>
                {news?.map(item => (
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box>
                            <img src={item.urlToImage} alt="" height="250px" width="99%" objectfit="contain" />
                        </Box>
                        <Box sx={{ mx: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <Typography >{item?.description?.substring(0, 100)}</Typography>
                            <Link href={item.url} variant="body2" className={classes.link} sx={{ textDecoration: 'none' }}>Read Article</Link>
                        </Box>
                    </Box>
                ))}
            </Carousel>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }} width="500px">
                <Typography sx={{ border: '2px solid white', borderRadius: '20px', px: 2, py: 0.5 }} variant="body2">Top news</Typography>
                <Typography sx={{ border: '2px solid white', borderRadius: '20px', px: 2, py: 0.5 }} variant="body2">Movie news</Typography>
                <Typography sx={{ border: '2px solid white', borderRadius: '20px', px: 2, py: 0.5 }} variant="body2">TV news</Typography>
                <Typography sx={{ border: '2px solid white', borderRadius: '20px', px: 2, py: 0.5 }} variant="body2">Celebrity news</Typography>
            </Box>

        </Box>
    )
}

export default News