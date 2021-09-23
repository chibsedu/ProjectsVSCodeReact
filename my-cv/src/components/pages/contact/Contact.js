import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-2 z-depth-0 mt">
            <div className="card-content contactInfo">
                <p className="brown-text text-darken-4 pt">
                    <i className="fas fa-map-marker-alt"></i> 123 Google Ave, San Francisco, USA
                    <br/>
                    <i className="fas fa-phone"></i> +1 234 567 789
                    <br />
                    <i className="fas fa-envelope-square"></i> email@gmail.com
                    <br />
                    <i className="fab fa-internet-explorer"></i> www.mywebsite.com/johndoe
                    <br />
                    <i className="fab fa-facebook-square"></i> www.facebook.com/johndoe
                    <br />
                    <i className="fab fa-twitter-square"></i> www.twitter.com/johndoe
                    <br />
                    <i className="fab fa-linkedin"></i> www.linkedin.com/johndoe
                    <br />
                    <i className="fab fa-github-square"></i> www.github.com/johndoe
                </p>
            </div>
        </div>
      </div>
    )
  }
}
