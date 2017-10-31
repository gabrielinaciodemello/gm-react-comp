import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class AppLoading extends Component {

    constructor(){
        super();
        this.styles = {
            position:'fixed', 
            zIndex:'15', 
            width: '100%', 
            top: '0'
        }
    }

    render(){
        return(
            <div style={this.styles}>
                {this.props.loading ? <LinearProgress mode="indeterminate"/> : '' } 
            </div>
        )
    }
    
}

export default AppLoading;