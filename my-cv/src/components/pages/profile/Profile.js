import React, { Component } from 'react';
import ImgProfile from "../../images/person1.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
            <img className="circle responsive-img" src={ImgProfile} alt="John Doe" />
        </div>
      </div>
    )
  }
}
