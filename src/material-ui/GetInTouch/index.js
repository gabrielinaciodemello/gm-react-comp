import React, { Component } from 'react';

class GetInTouch extends Component {
  
  constructor(props){
    super();
    this.styles = {
      getInTouch:{
        marginTop: '30px',
        fontSize: '8pt'
      }
    }
  }
  
  render() {
    return (
      <div style={this.styles.getInTouch}>
          <span>GET IN TOUCH</span><br/>
      </div>
    );
  }
}
  
export default GetInTouch;