export const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};

export const handleFulfilled = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
};

export const handleFulfilledAll = ({ contacts }, { payload }) => {
  contacts.items = payload;
  console.log('payload', payload);
};

export const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload.message;
};
