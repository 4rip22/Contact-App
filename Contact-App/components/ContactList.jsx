import React from 'react';
import ContactItem from '../components/ContactItem';
 
function ContactList({ contacts }) {
 return (
   <div className="contact-list">
     {
       contacts.map((contact) => (
         <ContactItem key={contact.id} {...contact} />
       ))
     }
   </div>
 );
}
 
export default ContactList;