import{j as l,r as d,R as p,a as u}from"./vendor.97227e42.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};f();var h="/assets/logo.ecc203fb.svg";const t=l.exports.jsx,n=l.exports.jsxs;function m(){const[a,o]=d.exports.useState(0);return n("div",{className:"App",children:[n("header",{className:"App-header",children:[t("img",{src:h,className:"App-logo",alt:"logo"}),t("p",{children:"Hello Vite + React!"}),t("p",{children:n("button",{type:"button",onClick:()=>o(s=>s+1),children:["count is: ",a]})}),n("p",{children:["Update from quenandres Edit ",t("code",{children:"App.jsx"})," and save to test HMR updates."]}),n("p",{children:[t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",t("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"})]})]}),t("div",{children:t("h1",{children:"Testeando para crear pagina personal"})})]})}p.render(t(u.StrictMode,{children:t(m,{})}),document.getElementById("root"));