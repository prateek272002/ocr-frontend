  import React, { useState } from 'react';
  import axios from 'axios';
  import API_URL from '../config'
  function UpdateOcrRecord() {
    const [identificationNumber, setIdentificationNumber] = useState('');
    const [newExpiryDate, setNewExpiryDate] = useState('');
    const [updatedRecord, setUpdatedRecord] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleUpdate = async () => {
      
      try {

        
        const response = await axios.put(`${API_URL}/api/ocr/${identificationNumber}`, {
          dateOfExpiry: newExpiryDate,
        });

        if (response.data.success) {
          setUpdatedRecord(response.data.data);
          setErrorMessage('');
        } else {
          setUpdatedRecord(null);
          setErrorMessage(response.data.message);
        }
      } catch (error) {

        console.error('Error updating record:', error.message);
        setUpdatedRecord(null);
        setErrorMessage('Error updating record');
      }
    };

    return (
      <div>
        <h2>Update OCR Record</h2>
        <label>
          Identification Number:
          <input type="text" value={identificationNumber} onChange={(e) => setIdentificationNumber(e.target.value)} />
        </label>
        <label>
          New Expiry Date:
          <input type="text" value={newExpiryDate} onChange={(e) => setNewExpiryDate(e.target.value)} />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <p>To check the Update operation in case clear image is not upload try using Identification Number as 123456789 which is mannually inserted.</p>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        {updatedRecord && (
          <div>
            <h3>Updated Record Details:</h3>
            <p>ID: {updatedRecord.identificationNumber}</p>
            <p>Name: {updatedRecord.name}</p>
            {/* Display other fields as needed */}
            <p>New Expiry Date: {updatedRecord.dateOfExpiry}</p>
          </div>
        )}
      </div>
    );
  }

  export default UpdateOcrRecord;
