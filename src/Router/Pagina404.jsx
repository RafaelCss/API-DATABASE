import React from "react";
import styled from "styled-components";


const PageErro = styled.div`

background-color: blue ;
justify-content: center;
align-items: center;
display: flex ;
width: 100%;
height: 100%;
  p {
    font-size: x-large;
    color: #ecd5d5;
    font-weight: bold;
  }

`

const Pagina404 = () => {
  return (
      <PageErro>
        <p>Ops, está Pagina não existe</p>
      </PageErro>
  );
};

export default Pagina404;
