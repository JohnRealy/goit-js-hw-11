import{S as f,a as d,i as c}from"./assets/vendor-828e1447.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="43234109-b8a56a1b11e396064285a6ce5",g="https://pixabay.com",m="/api";function y(n,t){const o={q:n,key:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:t},s=new URLSearchParams(o),e=`${g}${m}/?${s}`;return fetch(e).then(r=>(r.ok||iziToast.error({title:"Error",message:"Ups.. Something wrong",position:"topRight"}),r.json()))}function b(n){return n.map(t=>`<li class="gallary-item">
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
            </li>`).join("")}const L=document.querySelector(".form-js"),l=document.querySelector(".gallary"),i=document.querySelector(".js-backdrop");L.addEventListener("submit",P);const S={lines:9,length:42,width:24,radius:45,scale:.9,corners:1,speed:.8,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},u=new f(S),w=new d(".gallary a",{captionsData:"alt",captionDelay:250});let $=1;function P(n){n.preventDefault(),O(),l.innerHTML="";const t=n.target.elements.input.value.trim();if(t.length===0)return p(),c.error({message:"Sorry, your query is empty Please try again!",position:"topRight"});y(t,$).then(o=>{o.hits.length===0&&(l.innerHTML="",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),l.insertAdjacentHTML("beforeend",b(o.hits)),w.refresh()}).catch(o=>{console.log(o)}).finally(()=>p())}function O(){u.spin(i),i.classList.remove("is-hidden")}function p(){u.stop(i),i.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
