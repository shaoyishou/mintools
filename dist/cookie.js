var cookie={getCookie:function(e){var o=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),t=document.cookie.match(o);return t?t[2]:""},setCookie:function(e,o,t,i){var n=new Date;n.setDate(n.getDate()+i);var a=null==i?"":";expires="+n.toGMTString();document.cookie=e+"="+escape(o)+a+";path=/;domain=."+t},delCookie:function(e,o){var t=new Date;t.setTime(t.getTime()-100),document.cookie=e+"= ;expires="+t.toGMTString()+";path=/;domain=."+o}};export default cookie;