import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTNotInExprNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Operator1: Token, private Operator2: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}