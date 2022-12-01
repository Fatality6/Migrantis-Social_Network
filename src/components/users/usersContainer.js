import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./users";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch( setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch( setCurrentPageAC (pageNumber))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;