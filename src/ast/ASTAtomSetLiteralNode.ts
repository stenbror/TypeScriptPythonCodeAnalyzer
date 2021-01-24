import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTAtomSetLiteralNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Right: ASTNode, private Operator2: Token) {
        super(startPos, endPos);
    }
}