import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTTypeListNode extends ASTNode {
    constructor(startPos: number, endPos: number, 
        private Nodes: ASTNode[], 
        private Separators: Token[], 
        private Mul: Token, 
        private MulNode: ASTNode, 
        private Power: Token, 
        private PowerNode: ASTNode) {
            super(startPos, endPos);
    }
}