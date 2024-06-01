export function createAllProductsMarkup(arr) {
    console.log(arr);
    return arr.map(
      obj => `<li>
      <h3>${obj.title}</h3>
      <p>${obj.price}</p>
      <p>${obj.description}</p>
    </li>`
    ).join("");
}