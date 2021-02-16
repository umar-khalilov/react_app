import './App.css';
import Counter from './components/calendar';

function App() {
  const stepNumber = 10;
  return (
    <Counter stepNumber={stepNumber} />
  );
}

export default App;
