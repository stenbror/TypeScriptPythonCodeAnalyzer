import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTSetContainerNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Keys: ASTNode[], private Separators: Token[]) {
        super(startPos, endPos);
    }
}