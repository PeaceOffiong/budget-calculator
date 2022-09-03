import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { useState, useContext, useEffect } from "react";


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [amountValue, setAmountValue] = useState("");
  const [chargeValue, setChargeValue] = useState("");
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", color: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInput = (event) => {
    if (event.target.name === "amount") {
      setAmountValue(parseInt(event.target.value));
    } else if (event.target.name === "charge") {
      setChargeValue(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!amountValue || !chargeValue) {
      showAlert(true, "rgb(230, 96, 96, 0.5)", "please enter value");
      removeAlert()
    }else if (isEditing) {
      setData(data.map((item) => {
        if (item.id === editId) {
          return {...item, charge: chargeValue, amount: amountValue} 
        }
        return item
      }))
      setAmountValue("");
      setChargeValue("");
      setIsEditing(false);
      setEditId(null);
      showAlert(true, "green", "Item Edited");
      removeAlert();
    } else {
      const newData = { id: new Date().getTime().toString(), amount: amountValue, charge: chargeValue }
      setData([...data, newData]);
      setAmountValue("");
      setChargeValue("");
      showAlert(true, "green", "Item Added");
      removeAlert();
    }

  }

  const showAlert = (show = false, color = "", msg = "") => {
    setAlert({ show, color, msg });
  };

  const removeAlert = () => {
    setTimeout(() => {
      showAlert(false, "", "");
    }, 2500);
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const handleEdit = (id) => {
    const specificItem = data.find((item) => item.id === id);
    setAmountValue(specificItem.amount);
    setChargeValue(specificItem.charge);
    setIsEditing(true);
    setEditId(id);
  }
  return (
    <AppContext.Provider
      value={{
        amountValue,
        chargeValue,
        handleInput,
        handleSubmit,
        alert,
        data,
        handleEdit,
        handleDelete,
        isEditing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
