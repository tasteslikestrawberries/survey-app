import React from 'react';
import {
    Link
  } from 'react-router-dom';

  //styles
  import Breadcrumb from 'react-bootstrap/Breadcrumb'

    const Header = () => {
        return (
    <>
    <div className='header'>
    <div className='headerItems'>
            <div className='verticalBar'></div>
            <span>Ankete</span>
    </div>
    </div>
        <nav>
        <Breadcrumb>
  <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/survey" }}>Ankete</Breadcrumb.Item>
  <Breadcrumb.Item className='breadcrumb-item' active>Nova anketa</Breadcrumb.Item>
</Breadcrumb>
        </nav>
    </>
        )
    }

export default Header

