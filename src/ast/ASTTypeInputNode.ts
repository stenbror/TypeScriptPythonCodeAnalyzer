import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTTypeInputNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Right: ASTNode, private Newlines: Token[], private EOF: Token) {
        super(startPos, endPos);
    }
}