import { Grid, Typography } from '@mui/material'
import { list, list1 } from '../constants/data.js';
import { Box } from '@mui/system';
import AddBoxIcon from '@mui/icons-material/AddBox';

const BoxOfficeList = () => {

    return (
        <Grid container color="white">
            <Grid item md={6}>
                {list.map(item => (
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }} width="200px">
                        <span style={{ borderRight: '2px solid yellow', paddingRight: '7px' }}>{item.num}</span>
                        <AddBoxIcon sx={{ mx: 3 }} />
                        <Box>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.price}</Typography>
                        </Box>
                    </Box>
                ))}
            </Grid>
            <Grid item md={6}>
                {list1.map(item => (
                    <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }} width="300px">
                        <span style={{ borderRight: '2px solid yellow', paddingRight: '7px' }}>{item.num}</span>
                        <AddBoxIcon sx={{ mx: 3 }} />
                        <Box>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.price}</Typography>
                        </Box>
                    </Box>
                ))}
            </Grid>

        </Grid>
    )
}

export default BoxOfficeList