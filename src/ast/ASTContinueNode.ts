import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTContinueNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token) {
        super(startPos, endPos);
    }
}