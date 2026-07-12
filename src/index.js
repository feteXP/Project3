import { Workspace } from "./Workspace";
import { Block } from "./Block";
import { Events } from "./Events";
import { Connection } from "./Connection";
import { Serializer } from "./Serializer";

export {
    Workspace,
    Block,
    Events,
    Connection,
    Serializer
};

export class BlockBuilder extends Workspace {
    public events: Events;

    constructor(container: HTMLElement) {
        super(container);

        this.events = new Events();
    }

    save(): string {
        return Serializer.save(this);
    }

    load(json: string): void {
        Serializer.load(this, json);
    }
}

declare global {
    interface Window {
        BlockBuilder: typeof BlockBuilder;
    }
}

window.BlockBuilder = BlockBuilder;
