import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTSingleInputNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Right: ASTNode, private Operator1: Token) {
        super(startPos, endPos);
    }
}