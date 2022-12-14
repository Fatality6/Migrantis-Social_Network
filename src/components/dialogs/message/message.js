import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './message.module.css';


const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='введите текст' name={'message'} component={'textarea'} />
      </div>
      <div>
        <button className={style.button}>отправить</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: 'message' })(MessageForm);

const Message = (props) => {

  const MessageItem = (props) => {

    if (props.id % 2 === 0) {
      return (
        <div className={style.messageArea}>
          <div className={style.itemRigth}>{props.message}</div>
        </div>)
    } else {
      return (
        <div className={style.messageArea}>
          <div className={style.itemLeft}>{props.message}</div>
        </div>)
    }
  }

  const dialogsItems = props.state
  const dialogsElements = dialogsItems.map(d => <MessageItem message={d.message} key={d.id} id={d.id} />);

  const onSubmit = (message) => {
    props.addMessage(message);
  }

  return (
    <div>
      <div>
        {dialogsElements}
      </div>
      <div className={style.formMessage}>
        <MessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Message;

