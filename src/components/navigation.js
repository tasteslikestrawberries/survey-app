import React from 'react';

//styles
import Breadcrumb from 'react-bootstrap/Breadcrumb';
 
const Nav = () => {

    return(
    <nav>
      <Breadcrumb>
      <Breadcrumb.Item href='./newsurvey'>Ankete</Breadcrumb.Item>
      <Breadcrumb.Item active>Rezultati</Breadcrumb.Item>
      </Breadcrumb>
    </nav>
    )
}

export default Nav