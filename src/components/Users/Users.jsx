import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";


let Users = (props) => {
    return <div>
        <Paginator onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}
                   totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>

        {props.isFetching ?
            <Preloader/>
            : <div className={s.users__parent}>
                {props.users.map(u =>
                    <User user={u}
                          key={u.id}
                          follow={props.follow}
                          unfollow={props.unfollow}
                          followingInProgress={props.followingInProgress}/>)}
            </div>}


    </div>

};


export default Users;

