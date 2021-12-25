import logo from './logo.svg';
// import './App.css';
// import Hello from './components/forProps/Hello';
// import Message from './components/forProps/Message';
//  import Mood from './components/forState/Mood';
import TaskContainer from './components/TaskContainer'

// Step 1 declare a component
function App() {
  // Step 2: Return some JSX
  return (
    
    <div className="App">
      <TaskContainer/>
    </div>
  );
}
// Step 3: Exporting/Importing Component
export default App;
