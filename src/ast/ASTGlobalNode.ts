import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTGlobalNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Nodes: Token[], private Separators: Token[]) {
        super(startPos, endPos);
    }
}