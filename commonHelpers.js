import{S as u,i as c,a as f}from"./assets/vendor-828e1447.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="43234109-b8a56a1b11e396064285a6ce5",h="https://pixabay.com",g="/api";function m(n,t){const r={q:n,key:d,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:t},s=new URLSearchParams(r),e=`${h}${g}/?${s}`;return fetch(e).then(o=>(o.ok||iziToast.error({title:"Error",message:"Ups.. Something wrong",position:"topRight"}),o.json()))}function y(n){return n.map(t=>`<li class="gallary-item">
              <a class="gallery-link" href="${t.largeImageURL}">
                <img
                  src="${t.webformatURL}"
                  alt="${t.tags}"
                />
              </a>
              <ul class="gallary-item-info">
                <li class="info-block">
                  <h5>Likes</h5>
                  <p>${t.likes}</p>
                </li>
                <li class="info-block">
                  <h5>Views</h5>
                  <p>${t.views}</p>
                </li>
                <li class="info-block">
                  <h5>Comments</h5>
                  <p>${t.comments}</p>
                </li>
                <li class="info-block">
                  <h5>Downloads</h5>
                  <p>${t.downloads}</p>
                </li>
              </ul>
            </li>`).join("")}const b=document.querySelector(".form-js"),l=document.querySelector(".gallary"),i=document.querySelector(".js-backdrop");b.addEventListener("submit",w);const L={lines:9,length:42,width:24,radius:45,scale:.9,corners:1,speed:.8,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},p=new u(L);let S=1;function w(n){n.preventDefault(),$(),l.innerHTML="";const t=n.target.elements.input.value.trim();if(t.length===0)return c.error({message:"Sorry, your query is empty Please try again!",position:"topRight"});m(t,S).then(r=>{r.hits.length===0&&(l.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),l.insertAdjacentHTML("beforeend",y(r.hits)),new f(".gallary a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{console.log(r)}).finally(()=>P())}function $(){p.spin(i),i.classList.remove("is-hidden")}function P(){p.stop(i),i.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
