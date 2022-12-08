import React from 'react';
import { connect } from "react-redux";
import {
  follow,
  getUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/usersReducer";
import Users from './users';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  } 

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
        followingIsProgress={this.props.followingIsProgress}
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
    isFetching: state.usersPage.isFetching,
    followingIsProgress: state.usersPage.followingIsProgress
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
  { follow, unfollow, toggleIsFetching, getUsers })(UsersContainer);