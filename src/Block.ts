// Block.ts
export class Block {
    element: SVGGElement;

    constructor(svg: SVGSVGElement) {
        this.element = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );
        svg.appendChild(this.element);
    }
}
