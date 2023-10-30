// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createContactAction } from 'store/contacts/slice';
// import { getContacts } from 'store/selectors';
// import css from './ContactForm.module.css';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const { items, isLoading, error } = useSelector(getContacts);

//   const dispatch = useDispatch();

//   const handleNameChange = ({ target }) => {
//     setName(target.value);
//   };

//   const handleNumberChange = ({ target }) => {
//     setNumber(target.value);
//   };

//   const createContact = newContact => {
//     if (
//       items.some(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     dispatch(createContactAction(newContact));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     createContact({ name, number });
//     setName('');
//     setNumber('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className={css.form}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={handleNameChange}
//           required
//         />
//         <label htmlFor="tel">Number</label>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={handleNumberChange}
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };
