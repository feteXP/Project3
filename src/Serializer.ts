import { Workspace } from "./Workspace";

export class Serializer {
    /**
     * Convert workspace to JSON data.
     */
    static save(workspace: Workspace): string {
        const data = {
            blocks: workspace.blocks.map(block => ({
                x: block.x,
                y: block.y,
                width: block.width,
                height: block.height,
                color: block.color,
                text: block.text
            }))
        };

        return JSON.stringify(data, null, 2);
    }

    /**
     * Load blocks from JSON.
     */
    static load(
        workspace: Workspace,
        json: string
    ): void {
        const data = JSON.parse(json);

        workspace.clear();

        for (const blockData of data.blocks) {
            workspace.createBlock({
                x: blockData.x,
                y: blockData.y,
                width: blockData.width,
                height: blockData.height,
                color: blockData.color,
                text: blockData.text
            });
        }
    }
}
