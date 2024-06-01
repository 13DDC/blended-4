import { addProducts } from "../requests/products";
import { createNewProductMarkup } from "../services/markupService";
import { refs } from "../refs";
export const formSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    new FormData(e.currentTarget).forEach((value, key) => {
        data[key] = value;
    })
    try {
        const result = await addProducts(data)
        const markup = createNewProductMarkup(result);
    refs.newProductSection.insertAdjacentHTML('beforeend', markup)
    refs.form.reset();
    } catch (error) {
        console.log(error);
    }
    
}