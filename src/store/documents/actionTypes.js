export const SET_CURRENT_PAGE = 'document.SET_CURRENT_PAGE';
export const SET_NUM_PAGES = 'document.SET_NUM_PAGES';
export const SET_SCROLL_TO = 'document.SET_SCROLL_TO';
export const SET_PAGINATION_ARRAY = 'document.SET_PAGINATION_ARRAY';
export const SET_DATA_PROCESSO = 'document.SET_DATA_PROCESSO';

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: { page },
});

export const setNumPages = (numPages) => ({
  type: SET_NUM_PAGES,
  payload: { numPages },
});

export const setShouldScroll = (bool, page) => ({
  type: SET_SCROLL_TO,
  payload: { bool, page },
});

export const setPagination = (paginationArray) => ({
  type: SET_PAGINATION_ARRAY,
  payload: { paginationArray },
});

export const setDocumentData = (
  ativas,
  passivas,
  numeroProcesso,
  assuntoProcesso,
  classeProcesso,
  statusProcesso,
  valorCausaProcesso,
  tarjasProcesso,
  numeroProcessoFormatado,
) => ({
  type: SET_DATA_PROCESSO,
  payload: {
    ativas,
    passivas,
    numeroProcesso,
    assuntoProcesso,
    classeProcesso,
    statusProcesso,
    valorCausaProcesso,
    tarjasProcesso,
    numeroProcessoFormatado,
  },
});
