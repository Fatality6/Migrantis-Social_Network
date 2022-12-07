import React from 'react';
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/usersReducer";
import Users from './users';
import Preloader from '../common/preloader/preloader';
import { UsersAPI } from '../../api/api';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items)
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      < Users
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

/* const mapDispatchToProps = (dispatch) => {
 return {
   follow: (userId) => {
     dispatch(followAC(userId));
   },
   unfollow: (userId) => {
     dispatch(unfollowAC(userId));
   },
   setUsers: (users) => {
     dispatch(setUsersAC(users));
   },
   setCurrentPage: (pageNumber) => {
     dispatch(setCurrentPageAC(pageNumber))
   },
   setTotalUsersCount: (totalCount) => {
     dispatch(setTotalUsersCountAC(totalCount))
   },
   toggleIsFetching: (isFetching) => {
     dispatch(toggleIsFetchingAC(isFetching))
   }
 }
}  */

export default connect(mapStateToProps,
  { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);