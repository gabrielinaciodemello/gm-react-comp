import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {StyleRoot} from 'radium';

class MaterialUIRoot extends Component {    
    render(){
        return(
            <StyleRoot>
                <MuiThemeProvider>
                    {this.props.children}
                </MuiThemeProvider>
            </StyleRoot>
        );
    }
}

export default MaterialUIRoot;