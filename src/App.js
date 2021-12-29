
 import './App.css';
 import Person from './components/redux-demo/Person'
 import Feelings from './components/redux-demo/Feelings'
 import HairColor from './components/redux-demo/HairColor'

// Step 1 declare a component
export default function App() {
  // Step 2: Return some JSX
  return (
    
    <div className="App">
      <Person/>
      <br/>
      <Feelings/>
      <br/>
      <HairColor/>

    </div>
  );
}
// Step 3: Exporting/Importing Component

