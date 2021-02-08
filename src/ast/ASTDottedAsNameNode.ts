import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDottedAsNameNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: ASTNode, private Operator1: Token, private Right: Token) {
        super(startPos, endPos);
    }
}