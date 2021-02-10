import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTFuncTypeNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Left: ASTNode, private Operator2: Token, private Operator3: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}