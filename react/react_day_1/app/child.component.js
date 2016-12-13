import React from 'react';

export default React.createClass({
  render(){
    return(
      <div>
        <input onKeyDown={this.keyDownHandler}/>
      </div>
    )
  },
  keyDownHandler(e){
    if(e.keyCode == 13) this.props.changeName(e.target.value); 
  }
})