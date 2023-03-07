import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert, clearAlert } = alertContext;

  return (
    alert !== null && (
      <div className={`d-flex alert alert-transparent-${alert.type}`}>
        <p>
          <i className='fas fa-info-circle'></i> {alert.msg}
        </p>
        <button className='btn btn-color' onClick={clearAlert}>
          <i className='fas fa-times-circle text-light'></i>
        </button>
      </div>
    )
  );
};

export default Alert;
