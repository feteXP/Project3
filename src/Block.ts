export interface BlockOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    color?: string;
    text?: string;
}

export class Block {
    public group: SVGGElement;
    public path: SVGPathElement;
    public label: SVGTextElement;

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public color: string;
    public text: string;

    constructor(svg: SVGSVGElement, options: BlockOptions = {}) {
        this.x = options.x ?? 0;
        this.y = options.y ?? 0;
        this.width = options.width ?? 140;
        this.height = options.height ?? 40;
        this.color = options.color ?? "#4CAF50";
        this.text = options.text ?? "Block";

        this.group = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "g"
        );

        this.path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );

        this.label = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        this.group.appendChild(this.path);
        this.group.appendChild(this.label);
        svg.appendChild(this.group);

        this.label.setAttribute("fill", "white");
        this.label.setAttribute("font-size", "14");
        this.label.setAttribute("font-family", "Arial, sans-serif");
        this.label.setAttribute("text-anchor", "middle");
        this.label.setAttribute("dominant-baseline", "middle");

        this.render();
    }

    public render(): void {
        this.group.setAttribute(
            "transform",
            `translate(${this.x}, ${this.y})`
        );

        this.path.setAttribute("fill", this.color);
        this.path.setAttribute("stroke", "#00000033");
        this.path.setAttribute("stroke-width", "1");

        this.path.setAttribute("d", this.createPath());

        this.label.setAttribute("x", (this.width / 2).toString());
        this.label.setAttribute("y", (this.height / 2).toString());
        this.label.textContent = this.text;
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.render();
    }

    public setText(text: string): void {
        this.text = text;
        this.label.textContent = text;
    }

    public setColor(color: string): void {
        this.color = color;
        this.path.setAttribute("fill", color);
    }

    private createPath(): string {
        const w = this.width;
        const h = this.height;
        const r = 8;

        return [
            `M ${r} 0`,
            `H ${w - r}`,
            `Q ${w} 0 ${w} ${r}`,
            `V ${h - r}`,
            `Q ${w} ${h} ${w - r} ${h}`,
            `H ${r}`,
            `Q 0 ${h} 0 ${h - r}`,
            `V ${r}`,
            `Q 0 0 ${r} 0`,
            "Z"
        ].join(" ");
    }
            }
