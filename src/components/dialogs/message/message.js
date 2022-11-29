import React from 'react';
import style from './message.module.css';

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

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }
   
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div>
      <div>
        {dialogsElements}
      </div>
      <div className={style.formMessage}>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} ></textarea>
        </div>
        <div>
          <button onClick={addMessage} className={style.button}>отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Message;