import { Block } from "./Block";

export class Drag {
    private block: Block;
    private svg: SVGSVGElement;

    private startX = 0;
    private startY = 0;

    private blockStartX = 0;
    private blockStartY = 0;

    constructor(svg: SVGSVGElement, block: Block) {
        this.svg = svg;
        this.block = block;

        this.enable();
    }

    private enable(): void {
        this.block.group.style.cursor = "grab";

        this.block.group.addEventListener(
            "pointerdown",
            this.start.bind(this)
        );
    }

    private start(event: PointerEvent): void {
        event.preventDefault();

        this.startX = event.clientX;
        this.startY = event.clientY;

        this.blockStartX = this.block.x;
        this.blockStartY = this.block.y;

        this.block.group.setPointerCapture(
            event.pointerId
        );

        this.block.group.addEventListener(
            "pointermove",
            this.move
        );

        this.block.group.addEventListener(
            "pointerup",
            this.end
        );

        this.block.group.style.cursor = "grabbing";
    }

    private move = (event: PointerEvent): void => {
        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        this.block.setPosition(
            this.blockStartX + dx,
            this.blockStartY + dy
        );
    };

    private end = (): void => {
        this.block.group.style.cursor = "grab";

        this.block.group.removeEventListener(
            "pointermove",
            this.move
        );

        this.block.group.removeEventListener(
            "pointerup",
            this.end
        );
    };
}
