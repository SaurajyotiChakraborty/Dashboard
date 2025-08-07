import css from "./Layout.module.css";
import moment from 'moment';
import { BiSearch } from 'react-icons/bi';
import Sidebar from "./Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const{pathname}=useLocation()

  const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  return ( <div className={css.container}>
        <Sidebar/>
        {pathname==="/" && <Navigate to="/dashboard"/>}

        <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span> {now}</span>
          <div className={css.SearchBar}>
            <BiSearch size={20}/>
            <input type="text" placeholder="Search" />
          </div>
          <div className={css.profile}>
            <img src="./profile.png" alt="image" />
            <div className={css.detail}>
              <samp>Saurajyoti Chakraborty</samp>
              <samp>chakrabortysaurajyoti22@gmail.com</samp>
            </div>
          </div>
         
        </div>
        <div className={css.content}>
            <Outlet/>
          </div>
      </div>
    </div>
    
  )
}

export default Layout
