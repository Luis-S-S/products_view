const URL = 'https://fakestoreapi.com';

async function fetchAllProducts() {
  try {
    const data = await fetch(`${URL}/products`);
    const products = await data.json();
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchOneProduct(id) {
  try {
    const data = await fetch(`${URL}/products/${id}`);
    const product = await data.json();
    return product;
  } catch (error) {
    throw new Error(error);
  }
}

export {
  fetchAllProducts,
  fetchOneProduct,
};
