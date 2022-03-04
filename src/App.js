import './App.css';
import Home from './pages/Home';

// eslint-disable-next-line no-unused-vars
const  Container = styled.div `
        height : 60px;
        baground-color : black ;
`

function App() {
  return (
    <div className="App"> 
      <Home />
    </div>
  );
}

export default App;
