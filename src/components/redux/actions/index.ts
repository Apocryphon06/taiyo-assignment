export const addContact = (payload: any) => {
  return {
    type: "ADD_CONTACT",
    payload: payload,
  } as any;
};
export const deleteContact = (payload:any) => {
  return {
    type: "DELETE_CONTACT",
    payload: payload,
  } as any;
};

export const editContact = () => {
  return {
    type: "EDIT_CONTACT",
  };
};
