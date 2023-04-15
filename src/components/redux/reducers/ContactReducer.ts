import { nanoid } from "nanoid";

const initialState = [
  [
    {
      id: 1,
      firstName: "Hrithik",
      lastName: "Chandrashekar",
      status: "Inactive",
    },
    {
      id: 2,
      firstName: "Nishchal",
      lastName: "Chandrashekar",
      status: "Inactive",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      status: "Active",
    },
    {
      id: 3,
      firstName: "Donald",
      lastName: "Harris",
      status: "Inactive",
    },
    {
      id: 4,
      firstName: "Nick",
      lastName: "Cage",
      status: "Active",
    },
  ],
];

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          id: nanoid(),
          firstName: action?.payload?.firstName,
          lastName: action?.payload?.lastName,
          status: action?.payload?.status,
        },
      ];

    case "DELETE_CONTACT":
      return state.filter((item: any) => item.id !== action.payload?.id);

    case "EDIT_CONTACT":
      return state;

    default:
      return state;
  }
};

export default contactReducer;
