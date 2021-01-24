import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTUnaryMinusNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}