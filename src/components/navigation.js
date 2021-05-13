import React from 'react';

//styles
import Breadcrumb from 'react-bootstrap/Breadcrumb';
 
const Nav = () => {
    return(
    <nav>
      <Breadcrumb>
      <Breadcrumb.Item href='#'>Ankete</Breadcrumb.Item>
      <Breadcrumb.Item active>Nova anketa</Breadcrumb.Item>
      </Breadcrumb>
    </nav>
    )
}

export default Nav