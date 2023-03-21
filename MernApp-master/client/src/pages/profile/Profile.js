import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "../../components/AddPost/AddPost";
import { getProfile } from "../../redux/actions/authActions";
import { getPost } from "../../redux/actions/postActions";

const Profile = () => {
  const dispatch = useDispatch();
  const profUser = useSelector((state) => state.authReducer.user);
  const loader = useSelector((state) => state.authReducer.isLoading);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/05/15/65/35/360_F_515653553_PhQXNhqe1hY4Gl4x68JLRdlYbUVklfnR.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className="addposthere">. </h1>
        <h1 className="mop">ADD Post Here : </h1>
        <AddPost></AddPost>
        <h1 className="mopo">. </h1>
        <h1 className="mopo">. </h1>
      </div>
    </>
  );
};

export default Profile;
