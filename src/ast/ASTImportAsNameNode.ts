import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTImportAsNameNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Left: Token, private Operator1: Token, private Right: Token) {
        super(startPos, endPos);
    }
}