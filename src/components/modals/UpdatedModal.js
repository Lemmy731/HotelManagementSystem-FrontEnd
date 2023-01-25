import React, {useState} from "react";
import "./Created.css";


const Update = () => {

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
          <h2>Updated</h2>
          <h3>Itemi is successfuly updated</h3>
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

export default Update;


