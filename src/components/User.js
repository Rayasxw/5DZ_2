import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUsersGetMoreAction} from "../redux/action";


function User({userInfo}) {
    const dispatch = useDispatch()
    const UserMore = useSelector(state => state.UsersReducer.UserMore)
    const handleGetMore = () => {
        dispatch(fetchUsersGetMoreAction(userInfo.id))
    }
    const isDetailsLoaded = UserMore && UserMore.id === userInfo.id;
    return (
        <div>
                <h2>---------------------------</h2>
                <p>name:{userInfo.name}</p>
                <p>email:{userInfo.email}</p>

            {!isDetailsLoaded && (
                <button onClick={handleGetMore} className="getMore">Get More</button>
            )}
            {isDetailsLoaded && (
                <div>
                    <h3>Extra Info:</h3>
                    <p>Username: {UserMore.username}</p>
                    <p>Phone: {UserMore.phone}</p>
                    <p>Website: {UserMore.website}</p>
                    <h4>Address:</h4>
                    <p>Street: {UserMore.address.street}</p>
                    <p>Suite: {UserMore.address.suite}</p>
                    <p>City: {UserMore.address.city}</p>
                    <p>Zipcode: {UserMore.address.zipcode}</p>
                    <p>Latitude: {UserMore.address.geo.lat}</p>
                    <p>Longitude: {UserMore.address.geo.lng}</p>
                    <h4>Company:</h4>
                    <p>Name: {UserMore.name}</p>
                    <p>Catch Phrase: {UserMore.company.catchPhrase}</p>
                    <p>BS: {UserMore.company.bs}</p>
                </div>
            )}


        </div>
    );
}

export default User;