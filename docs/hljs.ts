interface HLJS{
    highlightElement(el: HTMLElement): void;
    initLineNumbersOnLoad(): void;
};
declare const hljs: HLJS;

for(const el of document.querySelectorAll("code.block")){
    hljs.highlightElement(el as HTMLElement);
}

hljs.initLineNumbersOnLoad();
