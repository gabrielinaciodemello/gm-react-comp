import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import muiThemeable from 'material-ui/styles/muiThemeable';

class BlogAvatar extends Component {

  constructor(props){
    super();
    this.styles = {
      blogAvatar:{
        backgroundColor: props.muiTheme.palette.primary1Color,
        color: '#ffffff',
        textAlign: 'center',
        height: '270px'
      },
      src:{
        marginTop: '30px',
        marginBottom: '15px' 
      },
      name:{
        fontSize: '18pt',
        fontWeight: 'bold'
      },
      position:{
        fontSize: '12pt'
      }
    }
  }

  render() {
    return (
      <div style={this.styles.blogAvatar}>
          <Avatar style={this.styles.src} src={this.props.src} size={130} />
          <div style={this.styles.name}>{this.props.name}</div>
          <div style={this.styles.position}>{this.props.position}</div>
      </div>
    );
  }
}
  
export default muiThemeable()(BlogAvatar);