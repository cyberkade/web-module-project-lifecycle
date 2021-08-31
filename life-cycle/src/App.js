import React from 'react';
import './App.css';
import Card from './Components/Card';
import axios from 'axios';

class App extends React.Component {
    state = {
      userData: [],
      followers: []
    };

  componentDidMount() {
    axios.get(`https://api.github.com/users/cyberkade`)
    .then(res => this.setState({...this.state, userData: [...this.state.userData, res.data]}))
    .catch(err => console.log(err))
    .catch(err => console.log(err))
  }
  

  // handleClick() {
  //   axios.get('https://api.github.com/users/cyberkade/followers')
  //   .then(res => console.log("Followers Data", res.data))
  //   .then(res => this.setState({...this.state,
  //       userData:[...this.state.userData, res.data]
  //   }))
  //   .catch(err => console.log(err))
  // }

  componentDidUpdate(prevState) {
    if(prevState.userData !== this.state.userData) {
      axios.get('https://api.github.com/users/cyberkade/followers')
      .then(res => console.log("Followers Data", res.data))
      .then(res => this.setState({...this.state, userData:[...this.state.userData, res.data]}))
      .catch(err => console.log(err))
    }
  }

  // fetchUpdatedData() {
  //   axios.get(`https://api.github.com/users/${}`)
  //   .then(res => this.setState({...this.state, userData: [...this.state.userData, res.data]}))
  //   .catch(err => console.log(err))
  // }

  render () {
    return <div className="App">
      <header className="App-header">
        {this.state.userData.map( (user, idx) => <Card handleClick={this.handleClick} key={idx} userData={user} />)}
      </header>
    </div>
  };
}

export default App;
