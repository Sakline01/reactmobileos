import './App.css';
import Operating from './components/operating';
import Company from './components/company';
function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <Operating/>
      <h1>Mobile Manufacturer</h1>
      <Company/>
    </div>
  );
}

export default App;
