import { removeProduct } from '../requests/products'
export async function onDeleteFormSubmit(event) {
    event.preventDefault();
    try {
        const id = event.target.elements.deletionId.value;
        const result = await removeProduct(id);
        alert(`Succsess ${result.title}`);
    } catch (error) {
        alert(error.message);
    }
}