import axios from 'axios';

const GITHUB_JSON_URL = "https://raw.githubusercontent.com/Alejillo18/Productos/refs/heads/main/products.json";

export const getProducts = () => {
  return axios.get(GITHUB_JSON_URL)
    .then(response => {
      return response.data.products;
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error;
    });
};

export const getProductById = (id) => {
  return axios.get(GITHUB_JSON_URL)
    .then(response => {
      return response.data.products.find((p) => p.id === id);
    })
    .catch(error => {
      console.error('Error fetching product:', error);
      throw error;
    });
};

export const getProductsByCategory = (categoryId) => {
  return axios.get(GITHUB_JSON_URL)
    .then(response => {
      return response.data.products.filter((p) => p.categoria === categoryId);
    })
    .catch(error => {
      console.error('Error fetching products by category:', error);
      throw error;
    });
};

export const getCategories = () => {
  return axios.get(GITHUB_JSON_URL)
    .then(response => {
      const categories = [...new Set(response.data.products.map(p => p.categoria))];
      return categories;
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
      throw error;
    });
};