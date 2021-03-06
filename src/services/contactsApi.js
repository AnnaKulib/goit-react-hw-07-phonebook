import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62cee676486b6ce8264f1032.mockapi.io/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: ({ name, phone }) => ({
                url: '/contacts',
                method: 'POST',
                body: { name, phone },
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsAPI;

// import axios from "axios";

// axios.defaults.baseURL = 'https://62cee676486b6ce8264f1032.mockapi.io';

// export async function fetchContacts() {
//     const {data} = await axios.get('/contacts');
//     return data;
// };

// export async function fetchContactsId(contactId) {
//     const {data} = await axios.get(/contacts/${contactId});
//     return data;
// };