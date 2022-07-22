import { useState, useEffect } from "react";
//  useRouteMatch,
// import { Link, useLocation } from "react-router-dom";
// import slugify from "slugify";
// было
// import * as contactsAPI from '../services/contacts-api';
// стало
import {useSelector, useDispatch} from 'react-redux';
import * as contactsOperations from '../contacts/contactsOperations';
// const makeSlug = string => slugify(string, {lower: true});

export default function ContactsView(){
    // const location = useLocation();
    // const {url} = useRouteMatch();
    // const [contacts, setContacts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // contactsAPI.fetchContacts().then(setContacts);
        dispatch(contactsOperations.fetchContacts())
    }, []);


return (
    <>
    </>
);
}

// 
// {contacts && (
    // <ul>
        // {contacts.map(contact => (
            // <li key={contact.id}>
            //    {contact.name}
                {/* <Link to={{pathname: `${url}/${makeSlug(`${contact.name} ${contact.id}`)}`,
            state: {
                from: {
                    location,
                    label: 'Back',
                },
            },
            }}
            >
                {contact.name}
                </Link> */}
            // </li>
        // ))}
    // </ul>
// )}