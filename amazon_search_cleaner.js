// ==UserScript==
// @name         Amazon Search Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Cleans visited Amazon URLs
// @author       @lschad
// @noframes
// @include      http*://*.amazon.*&field-keywords*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

     let el = document.getElementById('twotabsearchtextbox');
     let keywords = el.getAttribute('value');
     let path = `/s/?field-keywords=${keywords}`;

     window.history.replaceState({urlPath: path}, '', path);
})();