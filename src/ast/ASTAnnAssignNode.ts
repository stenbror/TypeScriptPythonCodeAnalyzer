import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTAnnAssignNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Right: ASTNode, private Operator1: Token, private Next: ASTNode) {
        super(startPos, endPos);
    }
}