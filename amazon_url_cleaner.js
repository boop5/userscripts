// ==UserScript==
// @name         Amazon URL Cleaner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Cleans visited Amazon URLs
// @author       @lschad
// @include      http*://*.amazon.*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let el = document.getElementById('averageCustomerReviews');
    let asin = el.getAttribute('data-asin');
    let path = `/dp/${asin}`;
    window.history.pushState({urlPath: path}, '', path);
})();