import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import "./profile.css"
const Profile = () => {
    const { isAuthenticated, loading, user } = useContext(Context);

    return loading ? (
        <Loader />
    ) : (
        <div className="profile">
            <h1>My Profile</h1>
            <h3>Full Name - {user?.name}</h3>
            <h3>Email - {user?.email}</h3>
        </div>
    );
};

export default Profile;