import React, {useState} from 'react';
import {
  } from 'react-router-dom';

//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';

const NewSurvey = (props) => {
    const [question, setQuestion] = useState('');


    return (
    <>
    <div className='container'>
            
                <form>
                    <label>
                        <input type="text" placeholder='Nova anketa' style={{color:'#FFD954', border:'none', borderRadius:50, padding:'10px'}} value={question} onChange={event => setQuestion(event.target.value)}/>
                    </label>
                </form>

                <Icon className='headerIcon' icon={pencilIcon} style={{color: '#aaaaaa', fontSize: '28px', margin:5}} />
     

    </div>
    </>
    )
}

export default NewSurvey

/*
import React, {useState} from 'react';
import {
  } from 'react-router-dom';

//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';

const NewSurvey = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const handleInputChange = (e)=>{
        // console.log( e.target.value );
        // your awesome stuffs goes here
    }


    return (
    <>
    <div className='container'>

        {/*
            
    <div className='tasks-container'>
            {
                isEditing ? 
                <form>
                <input type='text' onChange={handleInputChange} defaultValue = {props.item.chore}/> 
                </form>
                : <h1 onDoubleClick ={()=> setIsEditing(true)}>{props.item.chore}</h1>
            }
    </div>
   
   <Icon className='headerIcon' icon={pencilIcon} style={{color: '#aaaaaa', fontSize: '28px', margin:5}} />
     

   </div>
   </>
   )
}

export default NewSurvey

*/