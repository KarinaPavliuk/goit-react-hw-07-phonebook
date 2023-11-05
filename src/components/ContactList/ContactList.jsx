import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'store/contacts/operations';
import { selectVisibleContacts } from 'store/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const visibilityContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibilityContacts?.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.phone}
          <button type="button" id={contact.id} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
