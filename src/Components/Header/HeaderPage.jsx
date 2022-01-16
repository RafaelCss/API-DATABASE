import React  from "react";
import IconHeader from "./IconHeader"
import { MenuHeader } from "./MenuHeader";
import '../Styles/HeaderPage.css'

const HeaderPage = () => {
  
    return (
      <header>
        <div className='logo'>
          <h1>
            Talking
            <IconHeader/>
          </h1>
            <MenuHeader/>
        </div>
      </header>
    )
}

export default HeaderPage;
