import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

function valuetext(value) {
    return `${value}°C`;
}

export default function Test() {
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
            <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
            <Typography variant='h1' gutterBottom>
                <h1>المروان</h1>
            </Typography>
        </Box>
    );
}