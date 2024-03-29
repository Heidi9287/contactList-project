import React from "react";
import ContactRow from "./ContactRow.js";
const ContactList = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {props.contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              selectContact={props.selectContact}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
