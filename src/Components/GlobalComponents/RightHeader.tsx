import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Profile from "../../Assets/profile.svg";
import  Notification  from "../../Assets/Notification.svg";

const RightHeader: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [logoutShow, setLogoutShow] = useState<boolean>(false);
  const { session,logout } = useAuth();

  useEffect(() => {
    if (session && session.user) {
      setUserName(session.user.name);
    }
  }, [session]);

// console.log(userName)
const innerStyle:React.CSSProperties = {
  position: "absolute",
  width: "9px",
  height: "9px",
  borderRadius: "50%",
  backgroundColor: "#F8991D",
  left: "10px", 
}
  return (
    <div style={{display: "flex",alignItems: "center", justifyContent: "space-between", padding: "20px 35px",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",width: "100%"}}>
      {/* notification */}
      <div style={{display:"flex",position: "relative"}}>
      <div><img src={Notification} alt="...."/></div>
        <div style={innerStyle}></div>
      </div>

<div>
{/* profile logout */}
      <div style={{display:"flex",alignItems:"center"}}>
    
        <div style={{marginRight: "17px" , fontSize: "16px",fontWeight: 500,color: "#474747"}}>{userName}</div>
        <div onClick={() => setLogoutShow(!logoutShow)} style={{cursor: "pointer"}}>
          <img src={Profile} alt="...." />
        </div>
        
      </div>
{/* logout */}
    {logoutShow &&    <div key={"Logout"}>
            <div onClick={logout} style={{position: "absolute"}}>
              <button>
                Logout{" "}
              </button>
            </div>
          </div>
}
</div>
    </div>
  );
};

export default RightHeader;
