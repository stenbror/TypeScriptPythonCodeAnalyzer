import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTFileInputNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: ASTNode[], private Newlines: Token[], private EOF: Token) {
        super(startPos, endPos);
    }
}