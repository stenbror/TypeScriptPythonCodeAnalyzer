import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTIsExprNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Operator1: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}