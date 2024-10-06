import React from 'react'
import Popup from 'reactjs-popup'

const Signup = () => {
  return (
    <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="header"> Modal Title </div>
        
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
    )}
  </Popup>
  )
}

export default Signup