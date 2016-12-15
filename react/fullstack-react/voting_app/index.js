
import React from 'react'; 
import ReactDOM from 'react-dom'


const ProductList = React.createClass ({
  render: function(){
    return (
      <div className='ui items'>
        Hello, I am a basic React component. 
      </div>    
    );
  }
})
document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
  );
})

