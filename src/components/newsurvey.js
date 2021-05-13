import React from 'react';
import {
  } from 'react-router-dom';

//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';

const NewSurvey = () => {
    return (
        <>
        <div className='container'>
        <div className='surveyHeader'>
        <div className='surveyHeaderFlex'>
        <div className='surveyHeadline' style={{padding:10}}> Nova anketa </div>
        <Icon className='headerIcon' icon={pencilIcon} style={{color: '#aaaaaa', fontSize: '28px', margin:5}} />
    </div>
</div>
</div>
</>
    )
}

export default NewSurvey