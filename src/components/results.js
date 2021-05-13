import React from 'react';
import Graph from './graph';

//styles
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

//icons
import { Icon } from '@iconify/react';
import fileTypeExcel2 from '@iconify/icons-vscode-icons/file-type-excel2';

 const Results = () => {

    return (
        <>

        <div className='container'>
            <div className='excel'><Icon icon={fileTypeExcel2} style={{fontSize: '32px'}} /> Preuzmi excel datoteku</div>
            <div className='surveyHeader' style={{border: 'none'}} >
                Upitnik o zadovoljstvu provedenom edukacijom
            </div>
            <div className='resultsContainer'>
    
                <div className='resultsQuestion'>
                    <span>1.</span>
                    <span>Zbog čega ste se odlučili pohađati ovu edukaciju?</span>
                </div>

                <br/><br/>

                <Graph/>

                <br/><br/>

                <Table className='table'>
  <thead>
    <tr className='tableHeader'>
      <th>OPCIJE</th>
      <th>ODGOVORI</th>
      <th></th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{width: 500}}>Po preporuci</td>
      <td>25.49%</td>
      <td>9</td>
     
    </tr>
    <tr>
      <td>Svidio mi se sadržaj</td>
      <td>16.81%</td>
      <td>6</td>
   
    </tr>
    <tr>
      <td>Želim produbiti postojeće znanje o tematici</td>
      <td>18.12%</td>
      <td>8</td>
   
    </tr>
  </tbody>
</Table>
            </div>
                
        </div>
    </>
    )
}

export default Results