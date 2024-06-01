import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import {allProducts} from "./refs"
getAllProducts();
async function renderAllProducts ()
