import React from 'react';
import ContactItemBody from '../components/ContactItemBody';
import ContactItemimage from '../components/ContactItemimage';
 
function ContactItem({ imageUrl, name, tag }) {
 return (
   <div className="contact-item">
    <ContactItemimage imageUrl={imageUrl}/>
     <ContactItemBody name={name} tag={tag} />
   </div>
 );
}
 
export default ContactItem;