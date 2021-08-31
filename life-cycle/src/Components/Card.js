import React from "react";
import axios from 'axios';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          followers: []
        };
    }


    render () {
        console.log(this.props.userData)
        return <div className="userCard">
            <img className='profileImg' src={this.props.userData['avatar_url']}  alt='user git hub profile pic'/>
            <h2>{this.props.userData.name}</h2>
            <img className='calenderImg' src={`https://ghchart.rshah.org/${this.props.userData.login}`}  alt='user git hub profile pic'/>

            <div className='cardInfo'>
                <h3>{this.props.userData.login}'s GitHub:</h3>
                <a href={this.props.userData['html_url']}>{this.props.userData['html_url']}</a>
                <h3>Followers: {this.props.userData.followers}</h3>
                <h3>Following: {this.props.userData.following}</h3>
            </div>
            <button onClick={this.props.handleClick} >Show More</button>
        </div>
    }
}

export default Card