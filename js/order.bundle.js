!function(){"use strict";var e;window.liveskladOptions={api_key:"2wBrTwq5Vwz7eQDu5Vxy",title:"Мои заказы",placeholder:"Номер телефона или заказа",name_placeholder:"Фамилия",button_text:"Открыть заказы",width:"300px",height:"230px",color:"#4F76E6",columns:["number","device","brand","status","price"],hide_given:!1,currency:"руб"},(e=document.createElement("script")).type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://":"http://")+"my.livesklad.com/static/widget.js",document.getElementsByTagName("head")[0].appendChild(e);let t=document.getElementsByClassName("order-form")[0];new MutationObserver((function(){var e=document.createElement("link");e.href="./css/main.css",e.rel="stylesheet",e.type="text/css",document.getElementById("widget_iframe").addEventListener("load",(function(){console.log(this.document)}))})).observe(t,{childList:!0})}();