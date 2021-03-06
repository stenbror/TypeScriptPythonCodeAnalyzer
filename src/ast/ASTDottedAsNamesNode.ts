import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDottedAsNamesNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: ASTNode[], private Separators: Token[]) {
        super(startPos, endPos);
    }
}