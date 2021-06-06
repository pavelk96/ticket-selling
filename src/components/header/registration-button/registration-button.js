import {logoutUser} from "../../../actions";

import './registration-button.css';

import {useHistory} from "react-router-dom";
import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Button, Dropdown, Menu as MenuAnt} from "antd";


const RegistrationButton = () => {
    const {push} = useHistory();
    const dispatch = useDispatch();

    const isAuthorized = useSelector(state => state?.isAuthorized);
    const userEmail = useSelector(state => state?.user.email);

    const getFavoriteFilms  = () => {
        push("/favorite-films");
    };

    const pushToRegistration = useCallback(() => {
        if (isAuthorized) {
            return
        }
        push("/registration");
    },[isAuthorized, push]);


    const handleLogoutButton = () => {
       dispatch(logoutUser());
       localStorage.removeItem("email");
    };

        const menu = (
            (isAuthorized ?
                    <MenuAnt>
                        <MenuAnt.Item>
                            <Button onClick={() => getFavoriteFilms()}>Мои фильмы</Button>
                        </MenuAnt.Item>
                        <MenuAnt.Item>
                            <Button onClick={() => handleLogoutButton()}>Logout</Button>
                        </MenuAnt.Item>
                    </MenuAnt> : <></>
            )
        );
        return (
            <div>
                <Dropdown overlay={menu} placement="topRight">
                    <Button type="primary" className="btn" onClick={pushToRegistration}>{userEmail || "Login" }</Button>
                </Dropdown>
            </div>
        )
    }

export default RegistrationButton;