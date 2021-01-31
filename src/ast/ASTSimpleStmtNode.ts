import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTSimpleStmtNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: ASTNode[], private Separatrors: Token[], private Operator1: Token) {
        super(startPos, endPos);
    }
}