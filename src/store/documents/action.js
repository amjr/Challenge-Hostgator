import * as types from './actionTypes';

export default function doNothing() {
  return null;
}

export function setCurrentPage(page) {
  return async (dispatch) => {
    dispatch(types.setCurrentPage(page));
  };
}

export function setNumPages(numPages) {
  return async (dispatch) => {
    dispatch(types.setNumPages(numPages));
  };
}

export function setShouldScroll(bool, page) {
  return async (dispatch) => {
    dispatch(types.setShouldScroll(bool, page));
  };
}

export function setPagination(paginationArray) {
  return async (dispatch) => {
    dispatch(types.setPagination(paginationArray));
  };
}

export function setDocumentData(
  ativas,
  passivas,
  numeroProcesso,
  assuntoProcesso,
  classeProcesso,
  statusProcesso,
  valorCausaProcesso,
  tarjasProcesso,
  numeroProcessoFormatado,
) {
  return async (dispatch) => {
    dispatch(
      types.setDocumentData(
        ativas,
        passivas,
        numeroProcesso,
        assuntoProcesso,
        classeProcesso,
        statusProcesso,
        valorCausaProcesso,
        tarjasProcesso,
        numeroProcessoFormatado,
      ),
    );
  };
}
