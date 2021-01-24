import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTAtomExprNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Right: ASTNode, private TrailerNodes: ASTNode[]) {
        super(startPos, endPos);
    }
}