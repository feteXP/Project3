import { Block } from "./Block";

export type ConnectionType = "input" | "output";

export class Connection {
    public block: Block;
    public type: ConnectionType;

    public x: number;
    public y: number;

    public connectedTo: Connection | null = null;

    constructor(
        block: Block,
        type: ConnectionType,
        x: number,
        y: number
    ) {
        this.block = block;
        this.type = type;
        this.x = x;
        this.y = y;
    }

    /**
     * Connect this connection to another one.
     */
    connect(other: Connection): void {
        if (this.type === other.type) {
            return;
        }

        this.connectedTo = other;
        other.connectedTo = this;
    }

    /**
     * Disconnect the connection.
     */
    disconnect(): void {
        if (this.connectedTo) {
            this.connectedTo.connectedTo = null;
            this.connectedTo = null;
        }
    }

    /**
     * Get absolute position.
     */
    getPosition(): { x: number; y: number } {
        return {
            x: this.block.x + this.x,
            y: this.block.y + this.y
        };
    }

    /**
     * Check if connected.
     */
    isConnected(): boolean {
        return this.connectedTo !== null;
    }
}
