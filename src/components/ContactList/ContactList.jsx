import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'store/contacts/slice';
import { getAllContacts } from 'store/contacts/thunks';
import { getContacts, getFilter } from 'store/selectors';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  console.log('items', items);
  console.log(isLoading);
  console.log(error);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    !items.length && dispatch(getAllContacts());
  }, [dispatch, items.length]);

  // const onDeleteClick = id => {
  //   dispatch(deleteContact(id));
  // };

  // const getFilteredContacts = () => {
  //   return items.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {items?.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          {/* {onDeleteClick && (
            <button type="button" onClick={() => onDeleteClick(contact.id)}>
              Delete
            </button>
          )} */}
        </li>
      ))}
    </ul>
  );
};
