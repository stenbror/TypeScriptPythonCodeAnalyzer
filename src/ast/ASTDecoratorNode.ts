import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDecoratorNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Operator2: Token, private Operator3: Token, private Right: ASTNode, private Operator4: Token, private Operator5: Token) {
        super(startPos, endPos);
    }
}