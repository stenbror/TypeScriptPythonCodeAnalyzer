import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTAssignNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Operators: Token[], private Right: ASTNode[], private TtpeComment: Token) {
        super(startPos, endPos);
    }
}