import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTTryNode extends ASTNode {
    constructor(startPos: number, endPos: number, private op1: Token, Operator2: Token, private Left: ASTNode, private Excepts: ASTNode[], private ElsePart: ASTNode, private Operator3: Token, private Operator4: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}