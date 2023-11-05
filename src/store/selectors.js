import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    if (!filter || filter === '') {
      return contacts;
    }

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
