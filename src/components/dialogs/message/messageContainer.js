import Message from './message';
import { addMessage, updateNewMessage } from '../../../redux/dialiogsReducer';
import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

class MessageContainer extends React.Component {

  render() {

    return (
      <div>
        <Message {...this.props} />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
};

export default compose(
  connect(mapStateToProps, { addMessage, updateNewMessage }),
)(MessageContainer);