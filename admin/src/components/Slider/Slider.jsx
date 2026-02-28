import * as React from 'react';
import Slider from '@mui/material/Slider';

export default function SliderBar() {
  return (
    <Slider
      className="rangeSlider sliderBar"
      size="small"
      defaultValue={70}
      aria-label="Small slider"
      valueLabelDisplay="auto"
      sx={{
        width: '100%',
        maxWidth: 300,
        '& .MuiSlider-thumb': {
          backgroundColor: '#D7F073',
          width: 8,
          height: 8,
          '&:hover': {
            backgroundColor: '#D7F073',
            boxShadow:
              '0 0 6px rgba(215, 240, 115, 0.4), 0 0 12px rgba(215, 240, 115, 0.3)',
          },
        },
        '& .MuiSlider-track': {
          backgroundColor: '#D7F073',
          borderColor: '#D7F073',
          height: 2,
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#fff',
          height: 2,
        },
      }}
    />
  );
}
