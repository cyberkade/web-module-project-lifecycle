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
    axios.get('https://api.github.com/users/cyberkade/followers')
      .then(res => res.data.forEach(follower => this.setState({...this.state, userData: [...this.state.userData, follower]})))
      .catch(err => console.log(err))
  }
  
  // handleClick() {
  //   axios.get('https://api.github.com/users/cyberkade/followers')
  //   .then(res => console.log("Followers Data", res.data))
  //   .then(res => res.data.map(this.setState({...this.state,
  //       followers:[...this.state.followers, res.data.login]
  //   })))
  //   .catch(err => console.log(err))
  // }

  render () {
    return <div className="App">
      <header className="App-header">
        {console.log(this.state.userData)}
        {this.state.userData.map( (user, idx) => 
        <Card
          key={idx}
          login={user.login}
          url={user['avatar_url']}
          link={user['html_url']}
        />)}
      </header>
    </div>
  };
}

export default App;
