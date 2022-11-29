import Message from './message';
import { addMessageActionCreater, updateNewMessageTextActionCreater } from '../../../redux/dialiogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreater())
    },

    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreater(text))
    }

  }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);


export default MessageContainer;