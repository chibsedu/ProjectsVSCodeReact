import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-1 z-depth-0">
            <div className="card-content">
                <h6 className="white-text">
                    <strong># PROFESSIONAL SKILLS</strong>
                </h6>
                <hr />
                <div className="row pt">
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">HTML</p>
                        <div className="progress white">
                            <div className="determinate brown lighten-3" style={{ width: '89%' }}></div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">CSS</p>
                        <div className="progress white">
                            <div className="determinate brown lighten-3" style={{ width: '99%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="row pt">
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">JAVASCRIPT</p>
                        <div className="progress white">
                            <div className="determinate brown lighten-3" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">PHP</p>
                        <div className="progress white">
                            <div className="determinate brown lighten-3" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="row pt">
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">MYSQL</p>
                        <div className="progress white">
                            <div className="determinate brown lighten-3" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="col m6 s12">
                        <p class="grey-text text-lighten-2">JQUERY</p>
                        <div className="progress white">
                            <div className="determinate brown lighten-3" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
