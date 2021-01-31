import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTClassNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Operator2: Token, private Operator3: Token, private Left: ASTNode, private Operator4: Token, private Operator5: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}