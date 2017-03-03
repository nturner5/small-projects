import React from 'react';

class DigitalClock extends React.Component{
  constructor(props) {
    super(props);
    let date = new Date();
    let min = date.getMinutes();
    let hour = date.getHours();
    this.setTime = this.setTime.bind(this);
    this.state = {
      min: min < 10 ? `0${min}` : min,
      hour: hour <= 12 ? hour : hour - 12,
      blink: 'visible'
    };
  }  

  componentDidMount(){
    this.handle = setInterval(this.setTime, 500);
  }

  componentWillUnmount(){
    clearInterval(this.handle);
  }

  setTime(){
    let date = new Date();
    let min = date.getMinutes();
    let hour = date.getHours();
    let blink = this.state.blink;
    this.setState({
      min: min < 10 ? `0${min}` : min,
      hour: hour <= 12 ? hour : hour - 12,
      blink: blink === 'visible' ? 'hidden' : 'visible'
    });
    
  }

  render(){
    
    let hour = this.state.hour;
    let min = this.state.min;
    let blink = this.state.blink;

    return(
      <svg className ="digitalClock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 58">
        <g id="Layer1" data-name="Layer 2">
          <rect className="cls-1" x="0.5" y="0.5" width="94.95" height="56.94" rx="12" ry="12"/>
          <rect className="cls-2" x="14.66" y="17.47" width="68.74" height="24.19"/>
          <foreignObject width="100%" height="100%">
              <div xmlns="http://www.w3.org/1999/xhtml" className="f-object">
                <div style={styles.numbers}>
                  <span>{hour}</span><span style={{visibility: blink}}>:</span><span>{min}</span>
                  </div>
              </div>
          </foreignObject>
        </g>
      </svg>
    );
  }
} 

export default DigitalClock; 



let styles = {
  numbers: {
    fontSize: 20,
    fontFamily: 'digital-clock-font',
    letterSpacing: '2px',
    color:'rgb(51,	213,	229)'
  }
};