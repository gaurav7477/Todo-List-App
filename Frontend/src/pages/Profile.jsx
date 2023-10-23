import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
const Profile = () => {
    const { loading, user } = useContext(Context);

    return loading ? (
        <Loader />
    ) : (
        <div className="profile">
            <h1>My Profile</h1>
            <div className="user">
                <h2>Name: {user.name}</h2>
                <h2>Email: {user.email}</h2>
            </div>
        </div>
    );
};

export default Profile;