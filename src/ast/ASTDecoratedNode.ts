import { ASTNode } from "./ASTNode";

export class ASTDecoratedNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode,  private Right: ASTNode) {
        super(startPos, endPos);
    }
}