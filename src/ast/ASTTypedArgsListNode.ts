import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTTypedArgsListNode extends ASTNode {
    constructor(startPos: number, endPos: number, 
        private Nodes: ASTNode[], 
        private Separators: Token[], 
        private SlashToken: Token, 
        private Mul: Token,
        private MulNode: ASTNode,
        private Power: Token,
        private PowerNode: ASTNode,
        private TypeComments: Token[]) {
            super(startPos, endPos);
    }
}