import React, { useState } from "react";
import "./App.css";
import Table from "./components/table/Table";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [userData, setUserData] = useState([]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(formData).length !== 0) {
      setUserData((prevData) => [...prevData, formData]);
      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Firstname</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInput}
          placeholder="Enter firstname"
        />
        <br />
        <label>Lastname</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInput}
          placeholder="Enter lastname"
        />
        <br />
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInput}
          placeholder="Enter phone number."
        />
        <button type="submit">Submit</button>
      </form>
      {userData.length > 0 && <Table data={userData} />}
    </>
  );
}

export default App;
