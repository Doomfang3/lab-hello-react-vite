import './App.css'
import ironhackLogo from './assets/assg1.png';
import ironhackNavLogo from './assets/assg2.png';
import icon1 from './assets/assg3.png';
import icon2 from './assets/assg4.png';
import icon3 from './assets/assg5.png';
import icon4 from './assets/assg6.png';

function App() {
  
  return <div className='App'>
    <div className='nav'>
    <img src={ironhackLogo} alt="ironhack logo" />
    <img src={ironhackNavLogo} alt="ironhack Nav logo" />
    </div>
    <div className='content'>
    <h1>Say hello to <br /> ReactJS</h1>
    <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
    <button>Awesome!</button>
    </div>
    <div className='icons'>
    <img src={icon1} alt="icon1" />
    <h3>Declarative</h3>
    <p>React makes it painless to create interactive UIs</p>
    <img src={icon2} alt="icon2" />
    <h3>Components</h3>
    <p>Build encapsulated components that manage their state</p>
    <img src={icon3} alt="icon3" />
    <h3>Single-way</h3>
    <p>A state of immutable values are passed to the component's </p>
    <img src={icon4} alt="icon4" />
    <h3>JSX</h3>
    <p>Statically typed, designed to run on modern browsers</p>
    </div>

    </div>
    
}

export default App
