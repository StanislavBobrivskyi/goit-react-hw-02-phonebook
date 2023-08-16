import React from 'react';

import { ListWrapper, ItemStyle, DeleteBtn } from './ContactList.styled';

export function ContactList({ contacts, onDeleteContact }) {
  return (
    <ListWrapper>
      {contacts.map(contact => (
        <ItemStyle key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </ItemStyle>
      ))}
    </ListWrapper>
  );
}
