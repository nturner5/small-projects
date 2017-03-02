import React from 'react';
import {Link} from 'react-router';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 15,
      min: 45,
      hour: 290,
      timer: () => {
        let date = new Date();
        let sec = (6*date.getSeconds());
        let min = (6*date.getMinutes());
        let hour = (30*(date.getHours()%12) + date.getMinutes()/2);
        this.setState({
          sec: sec,
          min: min,
          hour: hour
        })
      }
    };
  }  



  render(){
    setTimeout(this.state.timer, 1000)

    let sec = {
      transformOrigin: '50px 50px',
      transform: `rotate(${this.state.sec}deg)`
    };
    let min = {
      transformOrigin: '50px 50px',
      transform: `rotate(${this.state.min}deg)`
    };
    let hour = {
      transformOrigin: '50px 50px',
      transform: `rotate(${this.state.hour}deg)`
    };

    return (
    
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 100 100" >
          <g id="body">
            <circle id="borderCircle" className="st0" cx="50" cy="50" r="49.3"/>
            <circle id="bgCircle" className="st1" cx="50" cy="50" r="47.8"/>
            <circle id="centerCircle" className="st2" cx="50" cy="50" r="1.3"/>
            <circle id="midCircle" className="st3" cx="50" cy="50" r="16.1"/>
          </g>
          <g id="ticks">
            <rect x="28.5" y="9.2" transform="matrix(0.8672 -0.4979 0.4979 0.8672 -2.5063 15.8969)" className="st4" width="0.2" height="6.8"/>
            <rect x="12.7" y="25" transform="matrix(0.5021 -0.8648 0.8648 0.5021 -18.1887 25.1562)" className="st4" width="0.2" height="6.8"/>
            <rect x="6.8" y="46.5" transform="matrix(2.434380e-03 -1 1 2.434380e-03 -42.9816 56.7039)" className="st4" width="0.2" height="6.8"/>
            <rect x="12.6" y="68" transform="matrix(-0.4979 -0.8672 0.8672 -0.4979 -43.0137 117.9843)" className="st4" width="0.2" height="6.8"/>
            <rect x="28.3" y="83.8" transform="matrix(-0.8648 -0.5021 0.5021 -0.8648 9.1052 176.9458)" className="st4" width="0.2" height="6.8"/>
            <rect x="49.8" y="89.6" transform="matrix(-1 -2.434380e-03 2.434380e-03 -1 99.5636 186.2607)" className="st4" width="0.2" height="6.8"/>
            <rect x="71.3" y="83.9" transform="matrix(-0.8672 0.4979 -0.4979 -0.8672 176.8949 127.5357)" className="st4" width="0.2" height="6.8"/>
            <rect x="87.2" y="68.2" transform="matrix(-0.5021 0.8648 -0.8648 -0.5021 192.9967 32.1376)" className="st4" width="0.2" height="6.8"/>
            <rect x="93" y="46.7" transform="matrix(-2.434380e-03 1 -1 -2.434380e-03 143.401 -42.8427)" className="st4" width="0.2" height="6.8"/>
            <rect x="87.3" y="25.1" transform="matrix(0.4979 0.8672 -0.8672 0.4979 68.6251 -61.4169)" className="st4" width="0.2" height="6.8"/>
            <rect x="71.5" y="9.3" transform="matrix(0.8648 0.5021 -0.5021 0.8648 16.0867 -34.2396)" className="st4" width="0.2" height="6.8"/>
            <rect x="45.2" y="3.8" transform="matrix(0.9945 -0.1045 0.1045 0.9945 -0.3203 4.7667)" className="st4" width="0.2" height="3.4"/>
            <rect x="40.6" y="4.5" transform="matrix(0.9781 -0.2079 0.2079 0.9781 -0.3944 8.5936)" className="st4" width="0.2" height="3.4"/>
            <rect x="36.1" y="5.7" transform="matrix(0.9511 -0.309 0.309 0.9511 -0.5132 11.5338)" className="st4" width="0.2" height="3.4"/>
            <rect x="31.7" y="7.4" transform="matrix(0.9135 -0.4067 0.4067 0.9135 -0.941 13.7083)" className="st4" width="0.2" height="3.4"/>
            <rect x="23.6" y="12.1" transform="matrix(0.809 -0.5878 0.5878 0.809 -3.5634 16.5354)" className="st4" width="0.2" height="3.4"/>
            <rect x="19.9" y="15" transform="matrix(0.7431 -0.6691 0.6691 0.7431 -6.0343 17.6854)" className="st4" width="0.2" height="3.4"/>
            <rect x="16.6" y="18.3" transform="matrix(0.6691 -0.7431 0.7431 0.6691 -9.3506 19.0361)" className="st4" width="0.2" height="3.4"/>
            <rect x="13.7" y="22" transform="matrix(0.5878 -0.809 0.809 0.5878 -13.4759 20.8794)" className="st4" width="0.2" height="3.4"/>
            <rect x="9" y="30.1" transform="matrix(0.4067 -0.9135 0.9135 0.4067 -23.6491 27.1351)" className="st4" width="0.2" height="3.4"/>
            <rect x="7.3" y="34.5" transform="matrix(0.309 -0.9511 0.9511 0.309 -29.2804 32.0073)" className="st4" width="0.2" height="3.4"/>
            <rect x="6.1" y="39" transform="matrix(0.2079 -0.9781 0.9781 0.2079 -34.9056 38.2637)" className="st4" width="0.2" height="3.4"/>
            <rect x="5.3" y="43.6" transform="matrix(0.1045 -0.9945 0.9945 0.1045 -40.1974 45.9892)" className="st4" width="0.2" height="3.4"/>
            <rect x="5.3" y="53" transform="matrix(-0.1045 -0.9945 0.9945 -0.1045 -48.376 65.8091)" className="st4" width="0.2" height="3.4"/>
            <rect x="6.1" y="57.6" transform="matrix(-0.2079 -0.9781 0.9781 -0.2079 -50.563 77.6863)" className="st4" width="0.2" height="3.4"/>
            <rect x="7.3" y="62.2" transform="matrix(-0.309 -0.9511 0.9511 -0.309 -51.0514 90.6006)" className="st4" width="0.2" height="3.4"/>
            <rect x="9" y="66.5" transform="matrix(-0.4067 -0.9135 0.9135 -0.4067 -49.5702 104.2573)" className="st4" width="0.2" height="3.4"/>
            <rect x="13.7" y="74.6" transform="matrix(-0.5878 -0.809 0.809 -0.5878 -39.9235 132.3306)" className="st4" width="0.2" height="3.4"/>
            <rect x="16.6" y="78.3" transform="matrix(-0.6691 -0.7431 0.7431 -0.6691 -31.5587 145.9114)" className="st4" width="0.2" height="3.4"/>
            <rect x="19.9" y="81.6" transform="matrix(-0.7431 -0.6691 0.6691 -0.7431 -20.841 158.5947)" className="st4" width="0.2" height="3.4"/>
            <rect x="23.6" y="84.6" transform="matrix(-0.809 -0.5878 0.5878 -0.809 -7.8878 169.9348)" className="st4" width="0.2" height="3.4"/>
            <rect x="31.7" y="89.2" transform="matrix(-0.9135 -0.4067 0.4067 -0.9135 23.8188 186.9276)" className="st4" width="0.2" height="3.4"/>
            <rect x="36.1" y="90.9" transform="matrix(-0.9511 -0.309 0.309 -0.9511 41.9198 191.8656)" className="st4" width="0.2" height="3.4"/>
            <rect x="40.6" y="92.1" transform="matrix(-0.9781 -0.2079 0.2079 -0.9781 60.9718 194.0623)" className="st4" width="0.2" height="3.4"/>
            <rect x="45.2" y="92.9" transform="matrix(-0.9945 -0.1045 0.1045 -0.9945 80.5005 193.3401)" className="st4" width="0.2" height="3.4"/>
            <rect x="54.6" y="92.9" transform="matrix(-0.9945 0.1045 -0.1045 -0.9945 118.9517 182.8872)" className="st4" width="0.2" height="3.4"/>
            <rect x="59.2" y="92.1" transform="matrix(-0.9781 0.2079 -0.2079 -0.9781 136.8429 173.2711)" className="st4" width="0.2" height="3.4"/>
            <rect x="63.7" y="90.9" transform="matrix(-0.9511 0.309 -0.309 -0.9511 153.1859 160.9639)" className="st4" width="0.2" height="3.4"/>
            <rect x="68.1" y="89.2" transform="matrix(-0.9135 0.4067 -0.4067 -0.9135 167.5358 146.2539)" className="st4" width="0.2" height="3.4"/>
            <rect x="76.2" y="84.6" transform="matrix(-0.809 0.5878 -0.5878 -0.809 188.7896 111.1563)" className="st4" width="0.2" height="3.4"/>
            <rect x="79.9" y="81.6" transform="matrix(-0.7431 0.6691 -0.6691 -0.7431 195.1555 91.6816)" className="st4" width="0.2" height="3.4"/>
            <rect x="83.2" y="78.3" transform="matrix(-0.6691 0.7431 -0.7431 -0.6691 198.4718 71.5969)" className="st4" width="0.2" height="3.4"/>
            <rect x="86.2" y="74.6" transform="matrix(-0.5878 0.809 -0.809 -0.5878 198.7021 51.4289)" className="st4" width="0.2" height="3.4"/>
            <rect x="90.8" y="66.5" transform="matrix(-0.4067 0.9135 -0.9135 -0.4067 190.2439 12.9027)" className="st4" width="0.2" height="3.4"/>
            <rect x="92.5" y="62.2" transform="matrix(-0.309 0.9511 -0.9511 -0.309 181.9531 -4.505)" className="st4" width="0.2" height="3.4"/>
            <rect x="93.7" y="57.6" transform="matrix(-0.2079 0.9781 -0.9781 -0.2079 171.3542 -20.1285)" className="st4" width="0.2" height="3.4"/>
            <rect x="94.5" y="53" transform="matrix(-0.1045 0.9945 -0.9945 -0.1045 158.8288 -33.6431)" className="st4" width="0.2" height="3.4"/>
            <rect x="94.5" y="43.6" transform="matrix(0.1045 0.9945 -0.9945 0.1045 129.7446 -53.463)" className="st4" width="0.2" height="3.4"/>
            <rect x="93.7" y="39" transform="matrix(0.2079 0.9781 -0.9781 0.2079 114.1145 -59.551)" className="st4" width="0.2" height="3.4"/>
            <rect x="92.5" y="34.5" transform="matrix(0.309 0.9511 -0.9511 0.309 98.3787 -63.0984)" className="st4" width="0.2" height="3.4"/>
            <rect x="90.8" y="30.1" transform="matrix(0.4067 0.9135 -0.9135 0.4067 82.9754 -64.2195)" className="st4" width="0.2" height="3.4"/>
            <rect x="86.2" y="22" transform="matrix(0.5878 0.809 -0.809 0.5878 54.6974 -60.0223)" className="st4" width="0.2" height="3.4"/>              <rect x="83.2" y="18.3" transform="matrix(0.6691 0.7431 -0.7431 0.6691 42.4375 -55.2784)" className="st4" width="0.2" height="3.4"/>
            <rect x="79.9" y="15" transform="matrix(0.7431 0.6691 -0.6691 0.7431 31.7198 -49.2277)" className="st4" width="0.2" height="3.4"/>
            <rect x="76.2" y="12.1" transform="matrix(0.809 0.5878 -0.5878 0.809 22.6617 -42.2431)" className="st4" width="0.2" height="3.4"/>
            <rect x="68.1" y="7.4" transform="matrix(0.9135 0.4067 -0.4067 0.9135 9.5864 -26.9654)" className="st4" width="0.2" height="3.4"/>
            <rect x="63.7" y="5.7" transform="matrix(0.9511 0.309 -0.309 0.9511 5.4075 -19.3679)" className="st4" width="0.2" height="3.4"/>
            <rect x="59.2" y="4.5" transform="matrix(0.9781 0.2079 -0.2079 0.9781 2.5796 -12.1975)" className="st4" width="0.2" height="3.4"/>
            <rect x="54.6" y="3.8" transform="matrix(0.9945 0.1045 -0.1045 0.9945 0.8681 -5.6862)" className="st4" width="0.2" height="3.4"/>
            <rect x="50" y="3.5" transform="matrix(1 2.434380e-03 -2.434380e-03 1 1.701931e-02 -0.122)" className="st4" width="0.2" height="6.8"/>
          </g>
          <g id="hands">
            <g id="hour" style={hour}>
              <polyline className="st2" points="49.6,49.7 50,50 50.4,49.7 		"/>
              <rect x="49.6" y="32.5" className="st2" width="0.7" height="17.2"/>
            </g>
            <g id="min" style={min}>
              <polyline className="st5" points="50.2,49.7 50,50 49.8,49.7 		"/>
              <rect x="49.8" y="15" className="st5" width="0.5" height="34.7"/>
            </g>
            <g id="sec" style={sec} className="st6">
              <rect x="49.9" y="9.3" className="st7" width="0.3" height="40.4"/>
              <polygon className="st7" points="50.1,49.7 50,50 49.9,49.7 		"/>
            </g>
          </g>
          </svg>
  
    );
  }
}

export default Clock; 



