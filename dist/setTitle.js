var setTitle=function(e){var t=document.body;document.title=e;var n=document.createElement("iframe");n.style.display="none",n.onload=function(){var e=setTimeout(function(){n.onload=null,t.removeChild(n),clearTimeout(e)},80)},t.appendChild(n)};export default setTitle;
