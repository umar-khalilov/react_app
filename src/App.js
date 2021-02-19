import './App.css';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';

function App(props) {
  return (
    <>
      <FlexContainer jc='center' ai='center' fd="column">
        <div>Div 1</div>
        <div>Div 2</div>
        <div>Div 3</div>
        <div>Div 4</div>
        <div>Div 5</div>
        <div>Div 6</div>
        <div>Div 7</div>
        <div>Div 9</div>
        <div>Div 10</div>
      </FlexContainer>
    </>
  );
}

export default App;
