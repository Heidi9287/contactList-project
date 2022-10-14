import react from 'react';

const ContactRow = (props) => {
  return (
    <>
      {props.contacts.map((contact, uniqId) => {
        return (
          <tr key={uniqId}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>
        );
      })}
    </>
  );
};

export default ContactRow;
