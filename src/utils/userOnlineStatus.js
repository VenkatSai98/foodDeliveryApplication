import { useState } from "react";

const userOnlineStatus = () => {
  const [userStatus, setUserStatus] = useState(true);
  window.addEventListener("online", (event) => {
    setUserStatus(true);
  });
  window.addEventListener("offline", (event) => {
    setUserStatus(false);
  });

  return userStatus;
};

export default userOnlineStatus;
