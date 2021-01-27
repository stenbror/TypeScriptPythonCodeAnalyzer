import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDotNameNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Operator2: Token) {
        super(startPos, endPos);
    }
}