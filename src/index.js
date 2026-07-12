import { Workspace } from "./Workspace";
import { Block } from "./Block";
import { Events } from "./Events";
import { Connection } from "./Connection";
import { Serializer } from "./Serializer";
import { Drag } from "./Drag";
import { Backup } from "./Backup";


export {
    Workspace,
    Block,
    Events,
    Connection,
    Serializer,
    Drag,
    Backup
};


export class BlockBuilder extends Workspace {
    public events: Events;
    public backups: Backup | null = null;

    constructor(container: HTMLElement) {
        super(container);

        this.events = new Events();
    }


    enableBackups(
        interval = 5000
    ): Backup {
        this.backups = new Backup(
            this,
            "blockbuilder_backup",
            interval
        );

        return this.backups;
    }


    save(): string {
        return Serializer.save(this);
    }


    load(
        json: string
    ): void {
        Serializer.load(
            this,
            json
        );
    }


    restoreBackup(): boolean {
        if (!this.backups) {
            return false;
        }

        return this.backups.restore();
    }
}


declare global {
    interface Window {
        BlockBuilder: typeof BlockBuilder;
    }
}


window.BlockBuilder = BlockBuilder;

window.BlockBuilder = BlockBuilder;
