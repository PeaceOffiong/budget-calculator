import React from 'react';
import { useGlobalContext } from './context';

const Total = () => {
    const { data } = useGlobalContext();
  return (
    <div className="total">
      {data.length > 0 && (
        <div className="total-center">
          Total : 
          <span className='total-number'>{` $ ${data.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}`}</span>
        </div>
      )}
    </div>
  );
}

export default Total