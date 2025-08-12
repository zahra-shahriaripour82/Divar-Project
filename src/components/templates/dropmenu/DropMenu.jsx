import { Link } from "react-router-dom";
import styles from "./DropMenu.module.css";
import { useGetUserProfile } from "../../../core/services/queri";
import { useQueryClient } from "@tanstack/react-query";

import { useState } from "react";

function DropMenu({ openDropMenu, setOpenDropMenu }) {
  const [isLogOutModalOpen,setIsLogOutModalOpen]=useState(false)
  const {data} =useGetUserProfile()
   const queryClient = useQueryClient();

  const handleLogout = () => {
    setIsLogOutModalOpen(true)
    queryClient.invalidateQueries(["profile"]); 
      document.cookie = "accessToken=; max-age=0; path=/";
  document.cookie = "refreshToken=; max-age=0; path=/";
  window.location.replace("/");
  
  };
  

  return (
    <>
   
    <div className={styles.DropMenu}>
      {data?.data ? (<div className={styles.exit} onClick={handleLogout}>
        <img src="logOut.svg" />
        <p>خروج از حساب کابری</p>
      </div>) :(
        <Link to={"/auth"} onClick={()=> setOpenDropMenu(false)}>
        <div className={styles.exit}>
        <img src="profile.svg" />
        <p> ایجاد حساب کاربری</p>
      </div>
        </Link>
        )
      }
      {/* <div className={styles.exit}>
        <img src="logOut.svg" />
        <p>خروج از حساب کابری</p>
      </div> */}
      {/* <div className={styles.adminPanel}>
<Link>
<p>پنل ادمین</p>
</Link>
      </div>
       */}
    </div>
    {isLogOutModalOpen &&<LogOutModal  onConfirm={confirmLogOut} onCansel={CanseslLogOut}/>}
     </>
  );
}

export default DropMenu;
