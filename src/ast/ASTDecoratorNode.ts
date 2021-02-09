import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDecoratorNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Left: ASTNode, private Operator2: Token, private Right: ASTNode, private Operator3: Token, private Operator4: Token) {
        super(startPos, endPos);
    }
}