import{j as i,r as l,R as a,a as d}from"./vendor.6d809304.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};u();var f="./assets/logo.ecc203fb.svg";const t=i.exports.jsx,p=i.exports.jsxs;function m(){return l.exports.useState(0),t("div",{className:"App",children:p("header",{className:"App-header",children:[t("img",{src:f,className:"App-logo",alt:"logo"}),t("p",{children:"Bonjour! je suis Charlotte"})]})})}a.render(t(d.StrictMode,{children:t(m,{})}),document.getElementById("root"));
