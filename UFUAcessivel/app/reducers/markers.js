import { SELECT_BLOCK } from "../actions/markers";

import blocos from "../data/blocos";

const initialState = {
  blocks: blocos,
  selectedBlocks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BLOCK:
      return {
        ...state,
        blocks: action.blockList,
        selectedBlocks: action.selectedBlocksList
      };
    default:
      return state;
  }
};

export default reducer;
