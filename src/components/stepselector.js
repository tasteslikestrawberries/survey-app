import React from 'react';
import {
    Link
  } from 'react-router-dom';
//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import graphIcon from '@iconify/icons-codicon/graph';

 const StepSelector = () => {
    return(
        <>
<div className='stepSelector'>
<Link to='/survey'><Icon className='icon' icon={pencilIcon} style={{color: '#aaaaaa', fontSize: '32px'}} /></Link>
<div className='hr'></div>
<Link to='/results'><Icon  className='icon' icon={graphIcon} style={{color: '#aaaaaa', fontSize: '32px'}} /></Link>
</div>

<div className='stepSelectorText'>
  <span>Uređivanje</span>
  <span>Pregled</span>
  <span>Slanje</span>
  <span>Rezultati</span>
</div>
</>
    )
}


export default StepSelector