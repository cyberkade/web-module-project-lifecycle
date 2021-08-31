import React from "react";

class Card extends React.Component {

    render () {
        console.log(this.props)
        return <div className="userCard">
            <img className='profileImg' src={this.props.url}  alt='user git hub profile pic'/>
            <h2>{this.props.name}</h2>
            <img className='calenderImg' src={`https://ghchart.rshah.org/${this.props.login}`}  alt='user git hub profile pic'/>

            <div className='cardInfo'>
                <h3>{this.props.login}'s GitHub:</h3>
                <a href={this.props.link}>{this.props.link}</a>
                <h3>Followers: {this.props.followers}</h3>
                <h3>Following: {this.props.following}</h3>
            </div>
        </div>
    }
}

export default Card