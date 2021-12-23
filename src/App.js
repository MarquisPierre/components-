import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
// Step 1 declare a component
function App() {
  return (
    // Step 2: Return some JSX
    <div className="App">
      <header className="App-header">
        <Hello spider ={"Spider-Man"}/>
        <Message  content ={"Passing data from props!"} sender ={"Marquis"}/>
        <Message content ={"Passing a different data from props!"} sender ={"Nate"} />
        <Message content ={"doing it again"} sender ={"Ned"}/>
        <Message content ={"I'm not done"} sender ={"Joe"}/>
        <Message /*content ={"Last one"} */sender ={"Candace"}/>
      </header>
    </div>
  );
}
// Step 3: Exporting/Importing Component
export default App;
