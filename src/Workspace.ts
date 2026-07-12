import { Block, BlockOptions } from "./Block";

export class Workspace {
    public readonly svg: SVGSVGElement;
    public readonly blocks: Block[] = [];

    constructor(container: HTMLElement) {
        this.svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        this.svg.setAttribute("width", "100%");
        this.svg.setAttribute("height", "100%");
        this.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svg.setAttribute("version", "1.1");

        this.svg.style.display = "block";
        this.svg.style.background = "#1e1e1e";
        this.svg.style.userSelect = "none";
        this.svg.style.touchAction = "none";

        container.appendChild(this.svg);
    }

    /**
     * Creates a new block.
     */
    public createBlock(options: BlockOptions = {}): Block {
        const block = new Block(this.svg, options);
        this.blocks.push(block);
        return block;
    }

    /**
     * Removes a block.
     */
    public removeBlock(block: Block): void {
        const index = this.blocks.indexOf(block);

        if (index !== -1) {
            this.blocks.splice(index, 1);
        }

        block.group.remove();
    }

    /**
     * Removes all blocks.
     */
    public clear(): void {
        for (const block of this.blocks) {
            block.group.remove();
        }

        this.blocks.length = 0;
    }

    /**
     * Finds the block under the mouse.
     */
    public getBlockAt(x: number, y: number): Block | null {
        for (let i = this.blocks.length - 1; i >= 0; i--) {
            const block = this.blocks[i];

            if (
                x >= block.x &&
                x <= block.x + block.width &&
                y >= block.y &&
                y <= block.y + block.height
            ) {
                return block;
            }
        }

        return null;
    }

    /**
     * Returns all blocks.
     */
    public getBlocks(): readonly Block[] {
        return this.blocks;
    }
}
