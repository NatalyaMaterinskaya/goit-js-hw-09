const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d=null;r.setAttribute("disabled","true"),e.addEventListener("click",(function(){d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3),e.setAttribute("disabled","true"),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(d),e.removeAttribute("disabled"),r.setAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.9532d1d1.js.map