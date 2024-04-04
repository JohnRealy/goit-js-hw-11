(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c="43234109-b8a56a1b11e396064285a6ce5",a="https://pixabay.com",u="/api";function f(o,t){const n={q:o,key:c,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:t},s=new URLSearchParams(n),e=`${a}${u}/?${s}`;return fetch(e).then(r=>{if(!r.ok)throw new Error("Ups.. Something wrong");return r.json()})}function p(o){return o.map(t=>`<li class="gallary-item">
              <img
                src="${t.previewURL}"
                alt=""
              />
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
            </li>`).join("")}const h=document.querySelector(".form-js"),l=document.querySelector(".gallary");h.addEventListener("submit",m);let d=1;function m(o){o.preventDefault();const t=o.target.elements.input.value.trim();if(t.length===0)return alert("Pusto");f(t,d).then(n=>{if(n.hits.length===0)return l.innerHTML="",alert("Sorry, there are no images matching your search query. Please try again!");l.insertAdjacentHTML("beforeend",p(n.hits))})}
//# sourceMappingURL=commonHelpers.js.map
