import { ASTNode } from "./ASTNode";

export class ASTDecoratorsNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: ASTNode[]) {
        super(startPos, endPos);
    }
}