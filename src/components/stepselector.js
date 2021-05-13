import React, {useState} from 'react';
import {
    Link
  } from 'react-router-dom';
//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import graphIcon from '@iconify/icons-codicon/graph';


  const StepSelector = () => {
  const [color,setColor]=useState('#fff');
  const [textColor,setTextColor]=useState('#aaaaaa');
  const [border, setBorder]=useState();


    return(
       <>
          <div className='stepSelector'>

          <Link to='/newsurvey'><Icon className='icon' icon={pencilIcon} style={{background:color,color:textColor, border:border, fontSize: '32px'}} onClick={()=>{setColor("#ffda544b");setTextColor('#FFD954');setBorder('none')}} /></Link>

          <div className='hr'></div>

          <Link to='/results'><Icon className='icon' icon={graphIcon} style={{background:color,color:textColor, border:border, fontSize: '32px'}} onClick={()=>{setColor("#ffda544b");setTextColor('#FFD954');setBorder('none')}} /></Link>
          </div>

          <div className='stepSelectorText'>
            <span style={{color:textColor}} onClick={()=>{setTextColor('#FFD954')}}>Uređivanje</span>
            <span>Pregled</span>
            <span>Slanje</span>
            <span style={{color:textColor}} onClick={()=>{setTextColor('#FFD954')}}>Rezultati</span>

          </div>
       </>
    )
}

export default StepSelector



