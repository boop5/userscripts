// ==UserScript==
// @name         YouTube Link Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replaces YouTube redirect URLs with their actual destination
// @author       @lschad
// @include      http*://*.youtube.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // https://stackoverflow.com/a/30271504/3450580
    let getUrlVars = function(href) {
        var vars = {};
        var parts = href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    let func = function() {
        let links = document.getElementsByTagName("a");
        for(let i=0;i<links.length;i++) {
            let link = links[i];
            if(!!link){
                if(link.toString().indexOf("youtube.com/redirect") > -1) {
                    let href = link.href;
                    let query = getUrlVars(href);
                    let newhref = decodeURIComponent(query.q);
                    link.setAttribute("href", newhref);
                }
            }
        }
    }

    setTimeout(func, 500);
    setTimeout(func, 5000); // look for dynamically added links we didn't catch the first time
})();