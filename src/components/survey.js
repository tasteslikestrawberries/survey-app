import React from 'react';
//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';

const Survey = () => {
    return (
        <>
        <div className='container'>
        <div className='surveyHeader'>
    <div className='surveyHeaderFlex'>
        <div className='surveyHeadline'>Upitnik o zadovoljstvu provedenom edukacijom</div>
        <Icon className='headerIcon' icon={pencilIcon} style={{color: '#aaaaaa', fontSize: '28px'}} />
    </div>
</div>
</div>
</>
    )
}

export default Survey