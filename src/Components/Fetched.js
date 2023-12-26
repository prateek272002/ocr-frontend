  import React from 'react'

  export default function Fetched(props) {
    return (
      <div>
        {props.searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {props.searchResults.map((user) => (
              <li key={user._id}>
                {/* Display user details, adjust based on your schema */}
                <p>ID: {user.identificationNumber}</p>
                <p>Name: {user.name}</p>
                <p>Last Name: {user.lastName}</p>
                {/* Add more fields as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    )
  }
