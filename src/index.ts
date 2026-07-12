import { Workspace } from "./Workspace";
import { Block } from "./Block";

export { Workspace };
export { Block };

export class BlockBuilder extends Workspace {
    constructor(container: HTMLElement) {
        super(container);
    }
}

// Global browser API
declare global {
    interface Window {
        BlockBuilder: typeof BlockBuilder;
    }
}

window.BlockBuilder = BlockBuilder;
