import React,{useState, useEffect} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import './PDF.css'

export const PDF = () => {
    
    // for onchange event
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');
    const [viewPdf, setViewPdf]=useState(null);
    
    useEffect(() => {
        
        if(pdfFile!==null){
            setViewPdf(pdfFile);
          }
          else{
            setViewPdf(null);
            }
      }, [pdfFile]);  
  
    // onchange event
    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
        e.preventDefault();
      let selectedFile=e.target.files[0];
      if(selectedFile){
        if(selectedFile&&fileType.includes(selectedFile.type)){
          let reader = new FileReader();
              reader.readAsDataURL(selectedFile);
              reader.onloadend = (e) =>{
                setPdfFile(e.target.result);
                setPdfFileError('');
              }
        }
        else{
          setPdfFile(null);
          setPdfFileError('Please select valid pdf file');
        }
      }
      else{
        console.log('select your file');
      }
    }
  
    return (
      <div className='container'>
  
      <br></br>
      
        <form className='form-group'>
            <label className='labelDocumento'>Documento CV</label>
            <label htmlFor="file-upload" className="subir">  
            <FontAwesomeIcon className='iconCloud' icon={faCloudUploadAlt} />Subir archivo</label>
            <input required onChange={handlePdfFileChange} id="file-upload" className="inputFile" type="file" placeholder='Subir de nuevo'></input>
                {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}                  
        </form>
        <br></br>
        <div className='pdf-container'>
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf}/>
        </Worker></>}
  
        {/* if we dont have pdf or viewPdf state is null */}
        {!viewPdf&&<>No pdf file selected</>}
        </div>
  
      </div>
    )
  }
  
  export default PDF