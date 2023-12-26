  import React, {useState} from 'react'
  import axios from 'axios';
  import History from './History';
  import Data from './Data';
  import Fetched from './Fetched';
  import Deleted from './Deleted';
  import Updated from './Updated'
  import API_URL from '../config'

  export default function InputForm() {


  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrData, setOcrData] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [deletedMessage, setDeletedMessage] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const [history, setHistory] = useState([]);



  const handlesmallupdate=()=>{
      setOcrData(null);
      setSearchResults([]);
      setDeletedMessage('');
      setHistory([]);
  }  
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_URL}/api/ocr/${deleteId}`);
      
      if (response.data.success) {
        setDeletedMessage('Record deleted successfully');
        setHistory([]);
        setOcrData(null);
      } else {
        setDeletedMessage('Error deleting record');
      }
    } catch (error) {
      console.error('Error deleting record:', error.message);
      setDeletedMessage('Error deleting record');
    }
  };

  const loadHistory = async () => {
          try {
            const response = await axios.get(`${API_URL}/api/ocr`);
            setHistory(response.data);
          } catch (error) {
            console.error('Error fetching OCR history:', error.message);
          }
        };



  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };



    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('image', selectedFile);
  
        const response = await axios.post(`${API_URL}/api/ocr`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setSearchResults([]);
        setOcrData(response.data);
        loadHistory();
      } catch (error) {
      
        console.error('Error uploading file:', error.message);
      }
    };


    const handleSearchNameChange = (event) => {
      setSearchName(event.target.value);
    };
    
    const handleSearch = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/ocr/users?name=${searchName}`);

        setSearchResults(response.data.data);
        setHistory([]);
        setOcrData(null);
        setDeletedMessage('');
        setSelectedFile(null);
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    };
    return (
    <>
      <h1>Thai ID Card OCR App</h1>

        <div>
          <input type="file" accept=".png, .jpeg, .jpg" onChange={handleFileChange} />
          <button onClick={handleUpload} disabled={!selectedFile}>
            Upload
          </button>
        </div>
        
        <div>


       
        <h2>Search Users by Name</h2>
        <input type="text" value={searchName} onChange={handleSearchNameChange} />
        <button onClick={handleSearch}>Search</button>
        <p>To check the Read Operation in case clear image is not upload try using Name as Prateek or John which is mannually inserted.</p>
        </div>
        
        
        <Data
          ocrData={ocrData}

        />


            <h2>Delete OCR Record</h2>
            <label>
              Enter ID to delete: 
              <input type="text" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
            </label>
            <button onClick={handleDelete}>Delete</button>
            <Deleted
          deletedMessage={deletedMessage}
        />

        <Updated
          handlesmallupdate={handlesmallupdate}
        />
      
        <Fetched
          
          handlesearch
          searchResults={searchResults}

        />

        <History
        history={history}
        />
        
      </>
    )
  }
