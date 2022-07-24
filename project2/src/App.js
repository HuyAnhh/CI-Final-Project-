import logo from './logo.svg';
import './App.css';
import Body from "./Components/Body"
import Iphone from './Components/Iphone';
import Ipad from './Components/Ipad';
import Mac from './Components/Mac';
import AirPods from './Components/AirPods';
import Watch from './Components/Watch';
import Accessory from './Components/Accessory'
import Service from './Components/Service';
function App() {
  return (
    <div className="App">
      <Body />
      <Iphone />
      <Ipad />
      <Mac />
      <AirPods />
      <Watch />
      <Accessory />
      <Service />
    </div>
  );
}

export default App;
