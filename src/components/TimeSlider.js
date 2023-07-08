import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';

const Parent = styled.div`
`;

function valuetext(value) {
    return `${value}`;
  }

export function TimeSlider({min, max, step, defaultValue, marks, label, disable = false}) {
    const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
return (
    <Parent><Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => label}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        marks={marks}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        disableSwap
        disabled={disable}
      />
    </Box>
    </Parent>
  );
}