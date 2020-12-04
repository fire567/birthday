import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Main from './pages/Main.jsx';


function App() {

  const [main, setMain] = React.useState([]);


    React.useEffect(() => {
      fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then(json => {
        setMain(json.main);
      });
    }, []);



  return (
    <div>
    <Route path="/" component={Home} exact/>
    <Route path="/Main" render={() => <Main items={main} />} exact/>

    </div>
  );
}

export default App;
