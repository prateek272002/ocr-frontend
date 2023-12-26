  import React ,{useState} from 'react'
  import axios from 'axios';
  export default function History(props) {
      
    return (
      <div>
      <h2>OCR History:</h2>
      <ul>
        {props.history.map((record) => (
          <li key={record.id}>
            {record.status === 'success' ? 'Success' : 'Failure'} - {record.timestamp}
          </li>
        ))}
      </ul>
    </div>
    )
  }
