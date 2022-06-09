import './App.css';
import Stars from './stars';

function App() {
  return (
    <div>
      <Stars amount={-1}/>
      <Stars amount={0}/>
      <Stars amount={1}/>
      <Stars amount={2}/>
      <Stars amount={3}/>
      <Stars amount={4}/>
      <Stars amount={5}/>
      <Stars amount={6}/>
      <Stars amount={99}/>
      <Stars amount={'test'}/>
    </div>
  );
}

export default App;