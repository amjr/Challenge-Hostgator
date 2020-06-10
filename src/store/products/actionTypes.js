export const SETTING_PRODUCTS = 'products.SETTING_PRODUCTS';

export const setProducts = products => ({
  type: SETTING_PRODUCTS,
  payload: { products }
});
