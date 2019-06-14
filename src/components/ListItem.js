import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardItem } from './common';

class ListItem extends Component {
    
    render() {
        const { id, title } = this.props.library.item;
        return (
            <CardItem>
                <Text> {title} {id}</Text>
            </CardItem>
        );
    }
}

export default ListItem;