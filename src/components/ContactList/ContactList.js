import { useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { useGetContactsQuery } from 'services/contactsApi';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

function ContactList() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const getContacts = () => {
    if (filter === '') {
      return data;
    }
    return data.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    .sort(function(a, b) {
      return a.name-b.name //sort не робе
    });
  };

  const contacts = getContacts();

  if (contacts) {
  return (
    <>
    <ul className={s.list}>
      {contacts
      .map(({ id, name, phone }) => (
        <ContactItem key={id} contact={{ id, name, phone}}/>
        ))
        }
    </ul>
    </>
  )}
};

export default ContactList;
