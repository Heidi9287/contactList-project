import React from 'react';
import ContactRow from './ContactRow.js';

const ContactList = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <ContactRow contacts={props.contacts} />
        {/* <ContactRow contacts={contacts} /> */}
        {/* {props.contacts.map((contact, uniqId) => {
          return (
            <tr key={uniqId}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
};

export default ContactList;
