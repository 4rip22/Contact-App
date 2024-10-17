import React from 'react';
import ContactItemBody from '../components/ContactItemBody';
import ContactItemimage from '../components/ContactItemimage';
import DeleteButton from '../components/DeleteButton';

 
function ContactItem({ imageUrl, name, tag,id, onDelete }) {
 return (
   <div className="contact-item">
    <ContactItemimage imageUrl={imageUrl}/>
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
    
   </div>
 );
}
 
export default ContactItem;