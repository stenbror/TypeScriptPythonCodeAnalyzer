import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTTestNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Operator1: Token, private Right: ASTNode, private Operator2: Token, private Next: ASTNode) {
        super(startPos, endPos);
    }
}