export const CHANGE_HEADER_HEIGHT = 'header.CHANGE_HEADER_HEIGHT';

export const changeHeaderHeight = (number) => ({
  type: CHANGE_HEADER_HEIGHT,
  payload: { number },
});
