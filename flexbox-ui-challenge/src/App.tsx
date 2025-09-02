import './App.css'
import Rectangle from './componants/rectangle'
import Circle from './componants/circle'
import Square from './componants/square'
import Rectangle2 from './componants/rectangleTwo'
import LongRactangle from './componants/longRactangle'
import Bluecircle from './componants/blue-circle'
import YellowRectangle  from './componants/yellowRectangle'
import BlueRactangle from './componants/blueRactangle'
import PinkCircle from './componants/pinkCircle'
import RedCircle from './componants/redCircle'

function App() {

  return (
    <div className="app">
      <div className="main">
        <Rectangle />
        <div className="first-container">
          <div className="upper">
            <RedCircle />
            <Square />
            <Rectangle2 />
          </div>
          <div className="lower">
            <BlueRactangle />
            <PinkCircle />
            <Bluecircle />
          </div>
        </div>
      </div>
      <div className="last-container">
        <Rectangle2 />
        <Bluecircle />
        <YellowRectangle />
      </div>
      <div className="last-container">
        <Circle />
        <LongRactangle />
        <Circle />
      </div>
    </div>
  );
}

export default App 
