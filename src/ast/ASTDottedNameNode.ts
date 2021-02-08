import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDottedNameNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Name: Token[], private Dots: Token[]) {
        super(startPos, endPos);
    }
}