import { Workspace } from "./Workspace";
import { Serializer } from "./Serializer";

export class Backup {
    private key: string;
    private timer: number | null = null;

    constructor(
        private workspace: Workspace,
        key = "blockbuilder_backup",
        interval = 5000
    ) {
        this.key = key;

        this.timer = window.setInterval(
            () => this.save(),
            interval
        );
    }

    save(): void {
        const data = Serializer.save(
            this.workspace
        );

        sessionStorage.setItem(
            this.key,
            data
        );
    }

    restore(): boolean {
        const data = sessionStorage.getItem(
            this.key
        );

        if (!data) {
            return false;
        }

        Serializer.load(
            this.workspace,
            data
        );

        return true;
    }

    stop(): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
