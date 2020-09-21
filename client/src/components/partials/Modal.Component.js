import React from 'react';
const ModalComponent = ({ handleClose, show, children }) => {
  return (
    <div className={show === false ? 'modal d-none' : 'modal d-block'}>
      <div className='modal-main'>
        <div className='closeBtn' onClick={handleClose}>
          <i className='fa fa-times-circle'></i>
        </div>
        {children}
      </div>
      <div className='modal-bkgd bg-dark'></div>
    </div>
  );
};
export default ModalComponent;
