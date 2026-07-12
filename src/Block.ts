export class Block {
    public group: SVGGElement;
    public body: SVGRectElement;
    public label: SVGTextElement;

    constructor(
        svg: SVGSVGElement,
        text: string,
        x: number = 0,
        y: number = 0
    ) {
        this.group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.group.setAttribute("transform", `translate(${x}, ${y})`);

        this.body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.body.setAttribute("width", "120");
        this.body.setAttribute("height", "40");
        this.body.setAttribute("rx", "8");
        this.body.setAttribute("fill", "#4CAF50");

        this.label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.label.setAttribute("x", "60");
        this.label.setAttribute("y", "25");
        this.label.setAttribute("text-anchor", "middle");
        this.label.setAttribute("fill", "white");
        this.label.textContent = text;

        this.group.appendChild(this.body);
        this.group.appendChild(this.label);
        svg.appendChild(this.group);
    }
}
