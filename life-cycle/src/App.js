import React from 'react';
import './App.css';
import Card from './Components/Card';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }

componentDidMount() {
  axios.get('https://api.github.com/users/cyberkade')
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
}

  render () {
    return <div className="App">
              <header className="App-header">
                <Card />
              </header>
            </div>
  };
}

export default App;
