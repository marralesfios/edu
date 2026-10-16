"use strict";
;
for (const el of document.querySelectorAll("code.block")) {
    hljs.highlightElement(el);
}
hljs.initLineNumbersOnLoad();
