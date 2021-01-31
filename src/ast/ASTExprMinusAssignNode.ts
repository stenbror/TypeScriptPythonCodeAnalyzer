import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTExprMinusAssignNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Operator1: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}