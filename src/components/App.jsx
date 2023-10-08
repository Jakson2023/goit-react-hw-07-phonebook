import { TitleText, Wrapper, Title } from './Phonebook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './Operations/operations';

export const App = () => {

const dispatch = useDispatch ();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);






  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <TitleText>Contacts</TitleText>
      <ContactList />
    </Wrapper>
  );
};
