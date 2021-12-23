import logo from './logo.svg';
import './App.css';
import Hello from './components/forProps/Hello';
import Message from './components/forProps/Message';
import Mood from './components/Mood';

// Step 1 declare a component
function App() {
  return (
    // Step 2: Return some JSX
    <div className="App">
      
        <Mood/>
     
    </div>
  );
}
// Step 3: Exporting/Importing Component
export default App;
