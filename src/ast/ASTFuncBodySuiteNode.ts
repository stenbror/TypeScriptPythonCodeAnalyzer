import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTFuncBodySuiteNode extends ASTNode {
    constructor(startPos: number, endPos: number, 
        private Operator1: Token,
        private TC: Token,
        private Operator2: Token,
        private Operator3: Token,
        private Nodes: ASTNode[],
        private Operator4: Token) {
            super(startPos, endPos);
    }
}