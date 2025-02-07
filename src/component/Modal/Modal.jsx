import React from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <p>ไม่พร้อมใช้งาน</p>
        <button onClick={onClose}>ปิด</button>
      </div>
    </div>
  );
};

export default Modal;
