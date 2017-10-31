import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {StyleRoot} from 'radium';

import LeftMenu from '../LeftMenu';
import Content from '../Content';
import AppLoading from '../AppLoading';

class Layout extends Component {    
    render(){
        return(
            <StyleRoot>
                <MuiThemeProvider>
                    <div>
                        <AppLoading loading={this.props.appLoading}/>
                        <LeftMenu menuAvatar={this.props.menuAvatar} menuButtons={this.props.menuButtons}/>
                        <Content contentViews={this.props.contentViews} routeChange={this.props.routeChange}/>
                    </div>
                </MuiThemeProvider>
            </StyleRoot>
        );
    }
}

export default Layout;