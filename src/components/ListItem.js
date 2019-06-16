import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardItem } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    const {library, selectedLibraryId } = this.props;

    if (library.item.id === selectedLibraryId) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library.item;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardItem>
            <Text style={titleStyle}>
              {id} - {title}
            </Text>
          </CardItem>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
});

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
