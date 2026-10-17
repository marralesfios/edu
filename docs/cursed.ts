let css = "";
for(const ss of document.styleSheets){
    for(const rl of ss.cssRules){
        css += rl.cssText + "\n";
    }
}
const codes: HTMLElement[] = [];
for(const el of document.getElementsByClassName("code")){
    const code = el.firstElementChild as HTMLElement;
    const controls = document.createElement("div");
    controls.classList.add("controls");
    const expand = document.createElement("a");
    expand.textContent = "View source";
    expand.target = "_blank";
    expand.href = URL.createObjectURL(new Blob([`<html><head><style>${css}</style></head><body>${code.outerHTML}</body></html>`],{type:"text/html"}));
    controls.append(expand);
    codes.push(code);
    el.prepend(controls);
}
document.addEventListener("keydown",() => {
    codes.forEach(el => el.classList.add("unscrollable"));
});
document.addEventListener("keyup",() => {
    codes.forEach(el => el.classList.remove("unscrollable"));
});
