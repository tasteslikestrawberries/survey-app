import React, { useState } from 'react';
import StepSelector from './stepselector';

//styles
import Breadcrumb from 'react-bootstrap/Breadcrumb';

//icons
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';

const inputsValueDefault = 'Nova anketa';
const NewSurvey = () => {
    const [inHover, setHover] = useState(false)
    const [inputsValue, setValue] = useState('');

    function onInputHandler(event) {
      setValue(event.target.value)
    }

    return (
    <>
     <nav>
      <Breadcrumb>
      <Breadcrumb.Item href='#'>Ankete</Breadcrumb.Item>
      <Breadcrumb.Item active>{inputsValue || inputsValueDefault}</Breadcrumb.Item>
      </Breadcrumb>
    </nav>
     <StepSelector />
    <div className='container'>
   
                <form>
                    <label>
                      <div className='wrapper'>
                        <input type="text" placeholder='Nova anketa' value={inputsValue} onInput={onInputHandler} className='surveyHeader' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>

                         {inHover && <Icon className='headerIcon' icon={pencilIcon} style={{color: '#aaaaaa', fontSize: '28px', margin:5, boxShadow:'1px 1px 2px 1px rgba(206, 203, 203, 0.2)'}}/>}
                         </div>
                    </label>
                </form>

           
     

    </div>
    </>
    )
}

export default NewSurvey