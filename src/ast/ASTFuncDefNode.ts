import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTFuncDefNode extends ASTNode {
    constructor(startPos: number, endPos: number, 
        private Operator1: Token, 
        private Operator2: Token, 
        private Left: ASTNode,
        private Operator3: Token,
        private Right: ASTNode,
        private Operator4: Token,
        private Operator5: Token,
        private Next: ASTNode) {
            super(startPos, endPos);
    }
}