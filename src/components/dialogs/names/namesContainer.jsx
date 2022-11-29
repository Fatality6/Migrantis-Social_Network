import Names from './names';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state: state.messagesPage.dialogs
  }
}

const NamesContainer = connect(mapStateToProps)(Names);

export default NamesContainer;