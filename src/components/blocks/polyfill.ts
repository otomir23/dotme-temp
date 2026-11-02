const alreadyProbed = !!customElements.get("polyfill-probe")

if (!alreadyProbed) {
    class PolyfillProbe extends HTMLBRElement { }
    customElements.define("polyfill-probe", PolyfillProbe, { extends: "br" })
    const supports = document.createElement("br", { is: "polyfill-probe" }).outerHTML.includes("polyfill-probe")

    if (!supports) {
        const originalDefine = customElements.define.bind(customElements)
        Object.defineProperty(customElements, "define", {
            get: () => (
                (name, Constructor, options) => {
                    if (!options?.extends)
                        return originalDefine(name, Constructor, options)
                    const tag = options.extends
                    document
                        .querySelectorAll(`${tag}[is=${name}]`)
                        .forEach((element) => {
                            Constructor.prototype.connectedCallback.call(element)
                        })
                }
            ) satisfies CustomElementRegistry["define"],
        })
    }
}
