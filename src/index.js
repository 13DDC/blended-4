import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { refs } from './refs';
import { createAllProductsMarkup } from './services/markupService';
import { formSubmit } from './js/formSubmit';
async function renderAllProducts() {
  try {
    const result = await getAllProducts();
    const markup = createAllProductsMarkup(result.products);
    refs.allProducts.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}

// renderAllProducts();
refs.form.addEventListener('submit', formSubmit)