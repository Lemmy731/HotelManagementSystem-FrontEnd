import React, {useState} from "react";
import "./Created.css";


const Error = () => {

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
          <h2>Error!!!</h2>
          <h3>An error has occured</h3>
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

export default Error;


