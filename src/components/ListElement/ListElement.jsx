import { ContactWrapper, ButtonDel } from 'components/Phonebook.styled';
import { useDispatch} from 'react-redux';
import { deleteContact } from 'components/Operations/operations';
export const ListElement = ({ element }) => {
  
  const dispatch = useDispatch();
  
  return (
    <ContactWrapper>
      <li>
        {element.name}: {element.phone}
      </li>
      <ButtonDel onClick={() => dispatch(deleteContact(element.id))}>delete </ButtonDel>
    </ContactWrapper>
  );
};
