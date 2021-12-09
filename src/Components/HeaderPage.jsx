import React, { Component } from "react";
import IconHeader from "./IconHeader"
import '../Components/Styles/HeaderPage.css'

class HeaderPage extends Component {
  render() {
    return (
      <header>
        <div className='logo'>
          <h1>
            Talking
            <IconHeader/>
          </h1>
        </div>
      </header>
    );
  }
}

export default HeaderPage;
