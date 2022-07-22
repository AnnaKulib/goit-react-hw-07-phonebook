import { useSelector } from 'react-redux';
import { getFilter } from 'components/redux/selectors';
import { useGetContactsQuery } from 'services/contactsApi';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

function ContactList() {
  const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const getContacts = () => {
    function dataSort (a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB)
        //сортируем строки по возрастанию
        return -1;
      if (nameA > nameB) return 1;
      return 0;
      //sort робе на фільтрі
    };

    if (filter === '') {
      return data;
    }
    return data
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .sort(dataSort)
  };

  const contacts = getContacts();

  if (contacts) {
    return (
      <>
        <ul className={s.list}>
          {contacts.map(({ id, name, phone }) => (
            <ContactItem key={id} contact={{ id, name, phone }} />
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
