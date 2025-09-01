import './App.css'
import Rectangle from './componants/rectangle'
import Circle from './componants/circle'
import Square from './componants/square'
import Rectangle2 from './componants/rectangleTwo'
import LongRactangle from './componants/longRactangle'
import Bluecircle from './componants/blue-circle'
import YellowRectangle  from './componants/yellowRectangle'
import BlueRactangle from './componants/blueRactangle'

function App() {

  return (
    <div className="app">
      <div className="main">
        <Rectangle />
        <div className="first-container">
          <div className="upper">
            <Circle />
            <Square />
            <Rectangle2 />
          </div>
          <div className="lower">
            <BlueRactangle />
            <Circle />
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
