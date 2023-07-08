import logo from './logo.svg';
import './App.css';
import { Day } from './components/Day';
import styled from '@emotion/styled';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; 

function App() {
  return <div>
{days.map((day) => <Day key={day} day={day} />)}
  </div>
}

export default App;
