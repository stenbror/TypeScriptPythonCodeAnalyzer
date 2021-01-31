import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTIfNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Left: ASTNode, private Operator2: Token, private Right: ASTNode, private ElifNodes: ASTNode[], private ElseNode: ASTNode) {
        super(startPos, endPos);
    }
}