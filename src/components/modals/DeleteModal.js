import React, {useState} from "react";
import "./Created.css";


const Delete = () => {

  const [create, setCreate] = useState(false);

  const toggleModal = () => {
    setCreate(!create);
  };

  if(create){
    document.body.classList.add('active-modl')
  }else{
    document.body.classList.remove('active-modl')
  }

  return(
    <>
      <button onClick={toggleModal} className="btn-modal">
      Open
      </button>

      {create && (
      <div className="modal">
        <div
          onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2>Delete?</h2>
          <h3>Are you sure you want to delete </h3>
          <div className="query">
          <input className="query-yes" onClick={toggleModal} value="Yes"/>
          <input className="query-no" type="button" onClick={toggleModal} value="No"/>
          </div>
          <button
          className="close-modal"
          onClick={toggleModal}
          >Close</button>
        </div>
      </div>
      )}

    
    </>
  )
}

export default Delete;


