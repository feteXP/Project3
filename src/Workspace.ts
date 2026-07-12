import { Block } from "./Block";

export class Workspace {
    public svg: SVGSVGElement;
    public blocks: Block[] = [];

    constructor(container: HTMLElement) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
        this.svg.style.background = "#202124";

        container.appendChild(this.svg);
    }

    createBlock(text: string, x = 0, y = 0): Block {
        const block = new Block(this.svg, text, x, y);
        this.blocks.push(block);
        return block;
    }
}
