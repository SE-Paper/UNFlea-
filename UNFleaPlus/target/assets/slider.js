function showValues(){var e={};var t=window.location.search.substring(1);var n=t.split("&");for(var r=0;r<n.length;r++){var i=n[r].split("=");if(typeof e[i[0]]==="undefined"){e[i[0]]=i[1]}else if(typeof e[i[0]]==="string"){var s=[e[i[0]],i[1]];e[i[0]]=s}else{e[i[0]].push(i[1])}}return e}$(document).ready(function(){$("#ex2").slider({})})(jQuery)