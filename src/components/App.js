import './App.css';
import Building from './Building';
import { Link, Route, Navigation } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function App() {

  // TODO: create an entry point to the application

  return (
    <div >

      {/* <nav>
        <Link to="/building">Dashboard</Link>
      </nav>
      <Route
        path="/building"
        component={Building}
      /> */}

      {/* <header className="App-header">
        welcome to our building
      </header> */}

      {/* <Link to='./Building'>
        {/* <Button>
          Get inside
    </Button> */}
      {/* </Link> */}
      < Building />
    </div >
  );
}


export default App;
