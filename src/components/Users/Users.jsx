import React from 'react';
import s from './Users.module.css';
import User from './User';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';

let Users = ({
  onPageChanged,
  currentPage,
  totalUsersCount,
  pageSize,
  isFetching,
  users,
  follow,
  unfollow,
  followingInProgress,
}) => {
  return (
    <div className={s.usersContainer}>
      <Paginator
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={s.users}>
          {users.map(u => (
            <User
              user={u}
              key={u.id}
              follow={follow}
              unfollow={unfollow}
              followingInProgress={followingInProgress}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
