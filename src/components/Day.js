import * as React from 'react';
import styled from "@emotion/styled"
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {TimeSlider} from './TimeSlider';



const DayStyle = styled.div`
display: flex;
width: 100%;
margin-left: 20px;
margin-top: 50px;
> * {
    height: 60px;
    margin-left: 10px;
    align-items: center;
    justify-content: center;
}
`;

const Name = styled.div`width: 50px;`;
const Check = styled.div`width: 20px;`;
const Data = styled.div`width: 300px;
position: relative;
> * {
  position: absolute;
}
`;
const Action = styled.div`width: 20px;`;

function getSlider(disable) { 
    return  <TimeSlider 
   min={6}
   max={24}
   defaultValue={6}
   step={6}
   label="one" 
   disable={disable}
   marks={[{value: 6, label: '6'}, {value: 12, label: '12'}, {value: 18, label: '18'}, {value: 24, label: '24'}]}/>;
}

export function Day({day}) {
    const [value, setValue] = React.useState(false);
    const [disable, setDisable] = React.useState(false);
    return <DayStyle>
        <Name>{day}</Name>
        <Check><input type='checkbox' onChange={(e) => {
            setDisable(e.target.checked)
        }}/></Check>
        <Data>{value? [getSlider(disable), getSlider(disable)]: getSlider(disable)}</Data>
        <Action>{<a href="#" onClick={() => setValue(!value)}>{value? <Remove/>: <Add/>}</a>}</Action>
    </DayStyle>
}