import React, { useContext } from 'react';
import './Sidenav.scss';
import Menu from './Menu';
import { AppContext } from "../context/AppContext";

const Sidenav = () => {
  const context = useContext(AppContext);

  return (
    <div className={`sidenav ${context.navOpen ? 'show' : 'hide'}`}>
      <Menu />
    </div>
  )
}
export default Sidenav;