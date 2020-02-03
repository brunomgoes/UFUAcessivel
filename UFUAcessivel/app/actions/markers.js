export const SELECT_BLOCK = "SELECT_BLOCK";

export const selectBlock = (blockList, selectedBlocksList) => ({
  type: SELECT_BLOCK,
  blockList,
  selectedBlocksList
});
