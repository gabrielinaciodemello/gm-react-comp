import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import muiThemeable from 'material-ui/styles/muiThemeable';

class PostCard extends Component {
    
    constructor(props){
        super();
        this.state = { shadow: 1 };
        this.styles = {
            title:{
                color: props.primary ? props.muiTheme.palette.primary1Color : null
            },
            card:{
                cursor: 'pointer'
            }
        }
    }

    onMouseOver = () => {
        this.setState({ shadow: 3 })
    }

    onMouseOut= () => {
        this.setState({ shadow: 1 })
    }

    render() {
        return (
            <Card style={this.styles.card} zDepth={this.state.shadow} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.props.onClick}>
                <CardMedia>
                    <img src={this.props.img} alt=''/>
                </CardMedia>
                <CardTitle title={this.props.title} titleColor={this.styles.title.color}/>
                <CardText dangerouslySetInnerHTML={{__html: this.props.text}}/>
                <br/>
                <br/>
            </Card>
        );
    }
}

export default muiThemeable()(PostCard);