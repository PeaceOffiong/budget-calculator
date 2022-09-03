import React from 'react'
import { useGlobalContext } from './context';
import { FaEdit, FaTrash } from "react-icons/fa";

const Expense = () => {
  const { data, handleEdit, handleDelete } = useGlobalContext()
  if (data) {
    return (
      <div className="Expense-contain">
        {data.map((each) => {
          const { id, amount, charge } = each;
          return (
            <ul className= "ul" key={id}>
              <li>
                <div className="amount">${amount}</div>
                <div className="charge">{charge}</div>
                <div className="buttons">
                  <FaEdit  className="icon g" onClick={() => handleEdit(id)}/>
                  <FaTrash className="icon r" onClick={() => handleDelete(id)}/>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Expense