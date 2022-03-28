import './App.css';
import MyLineChart from './components/MyLine/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import {
  useSpring,
  animated
} from 'react-spring'

function App() {

  const props = useSpring({
    to: {
      opacity: 1
    },
    from: {
      opacity: 0
    }
  })
  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
