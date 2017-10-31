import React, { Component } from 'react';
import Radium from 'radium';
import {HashRouter, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

class Content extends Component {
    
    constructor(props){
        super();

        // Animations
        this.withoutMarginAnimation = Radium.keyframes({
            '0%': {marginLeft: '280px'},
            '100%': {marginLeft: '0px'},
        }, 'withoutMargin');
        
        this.withMarginAnimation = Radium.keyframes({
            '0%': {marginLeft: '0px'},
            '100%': {marginLeft: '280px'},
        }, 'withMargin');

        // Style
        this.styles = {
            content:{
                '@media (min-width: 801px)': {
                    animationDuration: '0.7s',
                    animationName: this.withMarginAnimation,
                    marginLeft: '280px'
                },
                '@media (max-width: 801px)': {
                    animationDuration: '0.7s',
                    animationName: this.withoutMarginAnimation,
                    marginLeft: '0px'
                }
            },
            contentDiv:{
                margin: '10px'
            }
        }

        // Route history
        this.history = createHistory();
        
    }

    componentDidMount() {
        if(this.props.routeChange){
            this.history.listen(this.props.routeChange);
        }
    }

    render() {
        let content = null;
        if(this.props.contentViews && this.props.contentViews.length !== 0){
            content = <HashRouter hashHistory={this.history}>
                        <Switch>
                            {this.props.contentViews.map(content =>{
                                return <Route key={content.id} path={content.path} exact component={content.component}/>    
                            })}
                        </Switch>
                    </HashRouter>
        }

        return (
          <div style={this.styles.content}>
              <div style={this.styles.contentDiv}>
                {content}                
              </div>  
          </div>
        );
    }
}

export default Radium(Content);