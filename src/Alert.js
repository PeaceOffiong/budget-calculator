import React from 'react';
import { useGlobalContext } from './context';

const Alert = () => {
  const {alert} = useGlobalContext()
  return (
    <div className="alert-center" style={{ backgroundColor: `${alert.color}` }}>
      <p>{alert.msg}</p>
    </div>
  );
}

export default Alert