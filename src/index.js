import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import SingleContact from "./component/singleContact";
const Main = () => {
  const [contacts, setContact] = useState([]);
  //---------initialize state to select contact--------
  const [selectedContact, setSelectedContact] = useState({});
  const getContacts = async () => {
    const response = await fetch(
      "http://jsonplace-univclone.herokuapp.com/users"
    );
    const json = await response.json();
    setContact(json);
  };
  getContacts();

  const selectContact = async (contactId) => {
    const response = await fetch(
      `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
    );
    const contact = await response.json();
    setSelectedContact(contact);
  };

  useEffect(() => {
    console.log("first loading");
    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ? (
          <SingleContact selectedContact={selectedContact} />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("app"));
