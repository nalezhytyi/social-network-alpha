import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    requestUsers
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
/*import {withAuthRedirect} from "../../hoc/WithAuthRedirect";*/
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber,pageSize);

    };

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   isFetching={this.props.isFetching}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers: requestUsers
    }),
   /* withAuthRedirect*/)
(UsersContainer);



