!function(){"use strict";$.extend({awesCnb:(e={theme:{name:"acg"}})=>{window.opts=e;(async e=>{const t=await fetch("https://cdn.jsdelivr.net/gh/awescnb/acnb-themes-data@latest/themes.json");return(await t.json()).filter((t=>"string"==typeof t.name?t.name===e:t.name.includes(e)))[0].url})(e.theme.name).then((e=>function(e,t=function(){}){$.ajax({type:"GET",dataType:"script",cache:!0,url:e,success:()=>t()})}(e)))}})}();