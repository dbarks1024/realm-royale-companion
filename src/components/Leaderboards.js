import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, ListItem, Text } from 'native-base';
import { findLeaderboard } from '../actions';

class Leaderboards extends Component {
  componentWillMount() {
    this.props.findLeaderboard();
  }

  render() {
    console.log(this.props.leaderboard);
    return (
      <Container>
        <Content>
          <FlatList
          data={this.props.leaderboard}
          renderItem={({ item }) => <ListItem><Text>{item.player_name}</Text></ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
      leaderboard: state.leaderboard.leaderboard
  };
};

export default connect(mapStateToProps, { findLeaderboard })(Leaderboards);
