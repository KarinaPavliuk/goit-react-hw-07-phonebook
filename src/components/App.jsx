import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'store/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {error && Notify.error(`${error}`)}
      {isLoading
        ? Loading.dots({ backgroundColor: '#00000073' })
        : Loading.remove()}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
