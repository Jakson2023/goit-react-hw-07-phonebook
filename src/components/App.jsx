import { TitleText, Wrapper, Title, ErrorMsg, Loading } from './Phonebook.styled';
import { fetchContacts } from './Operations/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <TitleText>Contacts</TitleText>
      {error && <ErrorMsg>Error. Try reloading the App</ErrorMsg>}
      {isLoading && <Loading>Loading...</Loading>}
      <ContactList />
    </Wrapper>
  );
};
