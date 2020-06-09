import * as types from './actionTypes';

export const initialState = {
  currentPage: 1,
  pages: 0,
  shouldScroll: false,
  scrollPage: 1,
  pagination: [],
  passivas: ['Não informado'],
  ativas: ['Não informado'],
  numeroProcesso: '',
  numeroProcessoFormatado: '',
  assuntoProcesso: '',
  classeProcesso: '',
  statusProcesso: '',
  valorCausaProcesso: '',
  tarjasProcesso: ['Não informado'],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_DATA_PROCESSO:
      return {
        ...state,
        ativas: action.payload.ativas,
        passivas: action.payload.passivas,
        numeroProcesso: action.payload.numeroProcesso,
        assuntoProcesso: action.payload.assuntoProcesso,

        classeProcesso: action.payload.classeProcesso,
        statusProcesso: action.payload.statusProcesso,
        valorCausaProcesso: action.payload.valorCausaProcesso,
        tarjasProcesso: action.payload.tarjasProcesso,
        numeroProcessoFormatado: action.payload.numeroProcessoFormatado,
      };

    case types.SET_PAGINATION_ARRAY:
      return {
        ...state,
        pagination: action.payload.paginationArray,
      };

    case types.SET_SCROLL_TO:
      return {
        ...state,
        shouldScroll: action.payload.bool,
        scrollPage: action.payload.page ? action.payload.page : state.scrollToPage,
      };

    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };

    case types.SET_NUM_PAGES:
      return {
        ...state,
        pages: action.payload.numPages,
      };

    default:
      return {
        ...state,
      };
  }
};
