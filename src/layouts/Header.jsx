import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import DropMenu from "../components/templates/dropmenu/DropMenu"
function Header() {
  const [openDropMenu,setOpenDropMenu]=useState(false);
  console.log(openDropMenu);
  
  return (
    <header className={styles.header}>
      <div>
        <Link to={"/"}>
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to={"/"} onClick={()=>setOpenDropMenu(!openDropMenu)}>
          <span>
            <img src="profile.svg" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to={"/dashboard"} className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
      {!!openDropMenu && <DropMenu openDropMenu={openDropMenu} setOpenDropMenu={setOpenDropMenu}/>}
    </header>
  );
}

export default Header;
