import { CHANGE_COLOR } from "../actions/colors";

const initialState = {
  pinColors: [
    {
      id: "0",
      title: "Elevadores",
      color: "red"
    },
    {
      id: "1",
      title: "Estacionamentos",
      color: "red"
    },
    {
      id: "2",
      title: "Rampas para blocos",
      color: "red"
    },
    {
      id: "3",
      title: "Rampas para calçada",
      color: "red"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      state.pinColors.forEach(item => {
        if (item.title === action.title) {
          return (item.color = action.color);
        }
      });
      return state;
    default:
      return state;
  }
};

export default reducer;
