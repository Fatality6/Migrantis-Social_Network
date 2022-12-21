import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './message.module.css';


const MessageForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
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

const Message = ({state,addMessage}) => {

  const MessageItem = ({id,message}) => {

    if (id % 2 === 0) {
      return (
        <div className={style.messageArea}>
          <div className={style.itemRigth}>{message}</div>
        </div>)
    } else {
      return (
        <div className={style.messageArea}>
          <div className={style.itemLeft}>{message}</div>
        </div>)
    }
  }

  const dialogsItems = state
  const dialogsElements = dialogsItems.map(d => <MessageItem message={d.message} key={d.id} id={d.id} />);

  const onSubmit = (message) => {
    addMessage(message);
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

