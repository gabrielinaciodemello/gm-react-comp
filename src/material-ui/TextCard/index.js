import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';

class TextCard extends Component {
    constructor(props){
        super();
        this.styles = {
            titleColor: props.primary ? props.muiTheme.palette.primary1Color : null
        }
    }
    render() {
        return (
            <Card>
                <CardTitle  title={this.props.title} 
                            titleColor={this.styles.titleColor} 
                            subtitle={this.props.subTitle}/>
                <CardText dangerouslySetInnerHTML={{__html: this.props.text}}/>
                <br/>
                <br/>
            </Card>
        );
    }
}

export default muiThemeable()(TextCard);