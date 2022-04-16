import { makeStyles } from '@mui/styles';
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BoxOfficeList, FeatureToday, CommingSoon, MovieSlide, EditorPicks, Web, FanFavorites, TopPicks, BornToday, News, Footer, Theatre, Originals, Explore } from './index'

const useStyles = makeStyles(theme => ({
    img: {
        margin: '80px 150px 0 150px'
    },
    heading: {
        borderLeft: '3px solid #f5a005',
        color: 'white',
        paddingLeft: 12,
        display: 'flex',
        alignItems: 'center'
    },
    btn: {
        border: '1px solid white',
    }
}))

const date = new Date();

const Home = () => {
    const classes = useStyles()
    return (
        <Container>
            <img src="https://m.media-amazon.com/images/I/51rCt2U8jeL.jpg" className={classes.img} />
            <MovieSlide />
            <FeatureToday />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" color="#f5a005">What to watch</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }} color="#1E90FF">Get more recommendations <ChevronRightIcon /></Typography>
            </Box>
            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1 }}>Top picks <ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>TV Shows and movies just for you</Typography>
            </Box>

            <TopPicks />
            <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, my: 4 }}>From your WatchList <ChevronRightIcon /></Typography>


            <Box color="white" sx={{ textAlign: "center" }}>
                <AddBoxIcon />
                <Typography fontWeight="bold">Sign in to access your Watchlist</Typography>
                <Typography>Save shows and movies to keep track of what you want to watch.</Typography>
                <Button sx={{ backgroundColor: '#f5c518', color: 'black', fontWeight: 'bold', my: 4 }} variant="outlined">Sign in to IMDb</Button>
            </Box>

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1 }}>Fan favorites <ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>This week's top TV and movies</Typography>
            </Box>

            <FanFavorites />

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, mt: 5 }}>More to Watch <ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>IMDb helps you select the perfect next show or movie to watch.</Typography>
                <ButtonGroup sx={{ ml: 1 }}>
                    <Button sx={{ border: '1px solid white', px: 12, py: 1, mr: 2 }}>Watch Guide</Button>
                    <Button sx={{ border: '1px solid white', px: 12, py: 1 }}>Most Popular</Button>
                </ButtonGroup>
            </Box>

            <Typography color="#f5c518" variant="h4" fontWeight="bold" sx={{ ml: 1, my: 4 }}>Exclusive Videos</Typography>
            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1 }}>IMDb Originals
                    <ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>Celebrity interviews, trending entertainment stories, and expert analysis
                </Typography>
            </Box>

            <Originals />

            <Typography color="#f5c518" variant="h4" fontWeight="bold" sx={{ ml: 1, my: 4 }}>Explore what’s streaming
            </Typography>

            <Explore />

            <Typography color="#f5c518" variant="h4" fontWeight="bold" sx={{ ml: 1, my: 4 }}>Explore Movies & TV shows
            </Typography>

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1 }}>In theaters<ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>Showtimes near you</Typography>
            </Box>

            <Theatre />

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, mt: 6 }}>Top box office (US)<ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>Weekend of March 4-6</Typography>
            </Box>

            <BoxOfficeList />

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, mt: 6 }}>Comming Soon to theaters (US)<ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>Trailers for upcoming releases</Typography>
            </Box>

            <CommingSoon />

            <Typography color="#f5c518" variant="h4" fontWeight="bold" sx={{ ml: 1, my: 4, mt: 6 }}>More to explore</Typography>

            <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, my: 4 }}>Editor's picks<ChevronRightIcon /></Typography>

            <EditorPicks />

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, mt: 6 }}>Today's Trending<ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>Trending on {new Date().toLocaleString("default", { month: "long" })} {new Date().getDate()}
                </Typography>
            </Box>

            <BornToday />

            <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, my: 4 }}>Top news<ChevronRightIcon /></Typography>

            <News />

            <Box>
                <Typography className={classes.heading} variant="h5" fontWeight="bold" sx={{ ml: 1, mt: 6 }}>Around the web<ChevronRightIcon /></Typography>
                <Typography variant="body2" fontWeight="bold" color="#b8b8b8" sx={{ mb: 3, mt: 1, ml: 1 }}>Powered by Taboola</Typography>
            </Box>

            {/* <Web /> */}
            <Footer />
        </Container>
    )
}

export default Home