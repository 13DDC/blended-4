import{a}from"./assets/vendor-a2e8d7fa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i=a.create({baseURL:"https://dummyjson.com"}),d=async t=>(await i.post("/products/add",t)).data,l=async t=>(await i.delete(`/products/${t}`)).data,s={allProducts:document.querySelector("#allProducts"),form:document.querySelector("#newProductForm"),newProductSection:document.querySelector("#newProductSection"),deletionProductForm:document.querySelector("#deletionProductForm")},m=t=>`<li>
      <h3>${t.title}</h3>
      <p>${t.price}</p>
      <p>${t.description}</p>
    </li>`,f=async t=>{t.preventDefault();const r={};new FormData(t.currentTarget).forEach((n,c)=>{r[c]=n});try{const n=await d(r),c=m(n);s.newProductSection.insertAdjacentHTML("beforeend",c),s.form.reset()}catch(n){console.log(n)}};async function p(t){t.preventDefault();try{const r=t.target.elements.deletionId.value,n=await l(r);alert(`Succsess ${n.title}`)}catch(r){alert(r.message)}}s.form.addEventListener("submit",f);s.deletionProductForm.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
