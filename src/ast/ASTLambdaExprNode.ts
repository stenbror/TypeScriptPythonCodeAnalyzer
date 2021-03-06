import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTLambdaExprNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Left: ASTNode, private Operator2: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}