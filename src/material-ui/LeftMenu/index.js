import React, { Component } from 'react';

import Radium from 'radium';

import BlogAvatar from '../BlogAvatar';
import FlatButton from 'material-ui/FlatButton';
import GetInTouch from '../GetInTouch';

import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/svg-icons/navigation/menu';

class LeftMenu extends Component {
    
    constructor(props){
        super();

        // Animations
        this.hideMenuAnimation = Radium.keyframes({
            '0%': {left: '0px'},
            '100%': {left: '-280px'},
        }, 'hideMenu');
        
        this.showMenuAnimation = Radium.keyframes({
            '0%': {left: '-280px'},
            '100%': {left: '0px'},
        }, 'showMenu');      

        this.hideButtonAnimation = Radium.keyframes({
            '0%': {right: '10px'},
            '100%': {right: '-50px'},
        }, 'hideButton');
        
        this.showButtonAnimation = Radium.keyframes({
            '0%': {right: '-50px'},
            '100%': {right: '10px'},
        }, 'showButton');

        //Style
        this.styles = {
            leftMenu: {
                position: 'fixed',
                top: '0px',
                width: '280px',
                height: '100%',
                backgroundColor: '#ffffff',
                zIndex: 10,
                overflow: 'auto'
            },
            showMenu:{
                animationDuration: '0.7s',
                animationName: this.showMenuAnimation,
                left: '0px'
            },
            hideMenu:{
                animationDuration: '0.7s',
                animationName: this.hideMenuAnimation,
                left: '-280px'
            },
            menuButton: {
                textAlign: "left",
                paddingLeft: "30px",
                paddingTop: "8px",
                height: "50px"
            },
            getInTouch: {
                marginLeft: '20px'
            },
            button:{
                position: 'fixed',
                zIndex: 11,
            },
            showButton:{
                animationDuration: '0.7s',
                animationName: this.showButtonAnimation,
                right: '10px'
            },
            hideButton:{
                animationDuration: '0.7s',
                animationName: this.hideButtonAnimation,
                right: '-50px'
            }
        }
    }

    componentWillMount = () => {
        //Media Query
        const mediaQuery = window.matchMedia('(max-width: 800px)');
        if(mediaQuery.matches){
            this.setState({ showMenu: false, showButton: true });
        }
        else{
            this.setState({ showMenu: true, showButton: false });
        }
        mediaQuery.addListener((mq) => {
            if (mq.matches){ 
              this.setState({ showMenu: false, showButton: true });
            }
            else { 
              this.setState({ showMenu: true, showButton: false });
            };
        });
    }

    buttonClick = () => {
        var showMenu = this.state.showMenu === true ? false : true;
        this.setState({showMenu: showMenu, showButton: this.state.showButton });
    }

    render() {
        if(this.props.menuAvatar.name || this.props.menuAvatar.image){
            return (
                <div>
                    <div style={[this.styles.leftMenu, this.state.showMenu ? this.styles.showMenu : this.styles.hideMenu ]}>
                        <BlogAvatar name={this.props.menuAvatar.name} position={this.props.menuAvatar.position} src={this.props.menuAvatar.image} />
                        {this.props.menuButtons.map((button)=>{
                            return <FlatButton key={button.label} label={button.label} href={button.href} fullWidth={true} style={this.styles.menuButton}/>
                        })}
                        <div style={this.styles.getInTouch}>
                            <GetInTouch/>
                        </div>
                        
                    </div>
                    <div style={[this.styles.button, this.state.showButton ? this.styles.showButton : this.styles.hideButton ]}>
                        <IconButton onClick={this.buttonClick}>
                            <Icon />
                        </IconButton>
                    </div>
                </div>
              );
        }
        else{
            return null;
        }        
    }
}

export default Radium(LeftMenu);