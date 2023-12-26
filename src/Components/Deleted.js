
  export default function Deleted(props) {
      
      
        return (
          <div>
            
            <p>To check the Delete operation in case clear image is not upload try using Identification Number as 9119242875  which is mannually inserted.</p>
            {props.deletedMessage && <p>{props.deletedMessage}</p>}
          </div>
    )
  }

