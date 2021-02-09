import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDecoratorsNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: Token[]) {
        super(startPos, endPos);
    }
}