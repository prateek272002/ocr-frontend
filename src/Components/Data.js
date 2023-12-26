  import React from 'react'
  export default function Data(props) {
      
      return (
      <div>
      
        {(props.ocrData) && (
          <div>
            <h2>Uploaded OCR Result:</h2>
            <ul>
              <li>IdentificationNumber:{props.ocrData.identificationNumber}</li>
              <li>Name: {props.ocrData.name}</li>
              <li>LastName: {props.ocrData.lastName}</li>
              <li>Data Of Dirth: {props.ocrData.dateOfBirth}</li>
              <li>Date Of Issue: {props.ocrData.dateOfIssue}</li>
              <li>Date of Expiry: {props.ocrData.dateOfExpiry}</li>
            </ul>
          </div>
        )}

        {

        }
      
      
        

      </div>
    )
  }
