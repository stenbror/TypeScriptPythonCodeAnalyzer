import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTSuiteNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Operator2: Token, private Nodes: ASTNode[], private Operator3: Token) {
        super(startPos, endPos);
    }
}