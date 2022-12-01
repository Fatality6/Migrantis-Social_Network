import axios from 'axios';
import React from 'react';
import style from "./users.module.css";
import photoUser from './../../img/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    } /* всё что сверху до импорта - временный костыль */

    return <div>
      <div>
        { pages.map(p => 
            {
              return <span className={this.props.currentPage === p ? style.selectedPage : style.unselectedPage}
              onClick = {(e)=>{this.onPageChanged(p);}}>{p}</span>
            }
          )
        }
      </div>
      
      { this.props.users.map(u => {
        return <div className={style.user} key={u.id}>
          <div className={style.ava}>
            <div className={style.img}>
              <img src={u.photos.small ? u.photos.small : photoUser} alt='' />
            </div>
            <div className={style.btn}>
              {u.followed
                ? <button onClick={() => { this.props.unfollow(u.id) }}>удалить</button>
                : <button onClick={() => { this.props.follow(u.id) }}>добавить</button>
              }
            </div>
          </div>
          <div className={style.info}>
            <div className={style.leftText}>
              <div> {u.name} </div>
              <div> {u.status === null ? 'Нет статуса' : u.status} </div>
            </div>
            <div className={style.rightText}>
              <div> {'город не указан'} </div>
              <div> {'страна не указана'} </div>
            </div>
          </div>
        </div>
      })}
    </div>
  }
}

export default Users;