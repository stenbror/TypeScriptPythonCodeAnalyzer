import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTCompIfNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Right: ASTNode, private Next: ASTNode) {
        super(startPos, endPos);
    }
}