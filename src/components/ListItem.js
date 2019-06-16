import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { CardItem } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardItem>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardItem>
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
