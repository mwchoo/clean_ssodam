// ==UserScript==
// @name         SSODAM Userscript
// @namespace    http://www.ssodam.com
// @version      0.1
// @description  user script for clean ssodam (prevent tracker)
// @author       Minwoo, Choo
// @match        http://www.ssodam.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const styles = `
    .board-hits, #watermark, .board-scrap, .comment-date {
        visibility: hidden !important;
    }
    .board-hits.hits {
        visibility: visible !important;
    }
    .board-scrap a {
        visibility: visible !important;
    }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const boardHits = document.getElementsByClassName('board-hits')[0];
    boardHits.classList.add('hits');
})();
