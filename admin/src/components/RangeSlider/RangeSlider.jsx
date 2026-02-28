import "./rangeSlider.css"
import * as React from 'react';
import { useContext } from 'react';
import dashboardContext from "../../context/dashboardContext.js";
import Slider from '@mui/material/Slider';

export default function RangeSlider({ type }) {
  const {
    followersRange,
    setFollowersRange,
    costRange,
    setCostRange
  } = useContext(dashboardContext);

  // Get value based on type
  const value = type === "followers" ? followersRange : costRange;

  const handleChange = (event, newValue) => {
    if (type === "followers") {
      setFollowersRange(newValue);
    } else {
      setCostRange(newValue);
    }
  };

  function valuetext(value) {
    return `${value}k`;
  }

  return (
    <Slider
      value={value} // ✅ Pass the current value from context
      onChange={handleChange}
      getAriaLabel={() => `${type} range`}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      className='rangeSlider'
      min={0}
      max={100}
    />
  );
}
