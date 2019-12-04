import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    return (
      <div className="container text-light">
        <div className="cards pt-4">
          <h1>{this.props.city}</h1>
          <h5 className="py-1">
            <i className={`wi ${this.props.weatherIcon} display-4`}></i>
          </h5>
          {this.props.temp_celsius ? (
            <h1 className="py-2">{this.props.temp_celsius}&deg;</h1>
          ) : null}

          {/** show max and min temp*/}
          {this.minmaxTemp(this.props.temp_max, this.props.temp_min)}

          <h4 className="py-3">
            {this.props.description.charAt(0).toUpperCase() +
              this.props.description.slice(1)}
          </h4>
        </div>
      </div>
    );
  }

  minmaxTemp(max, min) {
    return (
      <h3>
        {max ? <span className="px-4">{max}&deg;</span> : null}
        {min ? <span className="px-4">{min}&deg;</span> : null}
      </h3>
    );
  }
}

export default Weather;
