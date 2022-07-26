/* eslint-disable */
import { useState } from 'react'
import {
  Link
} from "react-router-dom";


export default function DropDown({toggle}) {
 
  const [toggle1, setToggle1] = useState(true)
  const [submenu] = useState(["Our Menu","Lunch Menu","Dinner Menu","Wine Menu"])

  const handleToggle = ({toggle}) => {
    setToggle1((t1) => !t1)
  }
  const defaultStyle = {
    transform: "scaleY(0)"
  }
  const ToggleStyle = {
    transform: "scaleY(1)"
  }


  return (
    <>
      <div className={`dropDown`} style={toggle ? defaultStyle : ToggleStyle }  >
        <ul>
          <li> <Link to="/about">About</Link></li>
          <li>  Menu
            <div onClick={handleToggle}>
              {
                toggle1 ? <i class="material-symbols-outlined" >
                  add
                </i> : <i class="material-symbols-outlined">
                  remove
                </i>
              }
            </div>
          </li>
          {
            !toggle1 && <ul className="submenu" >
            {
              submenu.map((menu) => {
                return(
                  <li><i class="material-symbols-outlined">play_arrow</i>{menu}</li>
                )
              })
            }         
            </ul>      
          }
          <li> <Link to="/blog">Blog</Link></li>
          <li> <Link to="/gallery">Gallery</Link></li>
          <li> <Link to="/accolades">Accolades</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
