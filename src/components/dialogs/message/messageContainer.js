import Message from './message';
import { addMessage } from '../../../redux/dialiogsReducer';
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
    state: state.messagesPage.messages
  }
};

export default compose(
  connect(mapStateToProps, { addMessage }),
)(MessageContainer);