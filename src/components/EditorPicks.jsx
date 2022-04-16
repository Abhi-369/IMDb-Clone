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

const EditorPicks = () => {
    const [editor, setEditor] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPeople);
            setEditor(request.data.results)
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [])

    return (
        <Box color="white">
            <Carousel responsive={responsive}>
                {editor.map(({ known_for }) => (
                    <Box>
                        <img src={`https://image.tmdb.org/t/p/original/${known_for[0]?.backdrop_path}`} alt="" height="230px" width="99.5%" />
                        <Typography width="400px" sx={{m: 1}}>{known_for[0].title}</Typography>
                    </Box>
                ))}
            </Carousel>

        </Box>
    )
}

export default EditorPicks