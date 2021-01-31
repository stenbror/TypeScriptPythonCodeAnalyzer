import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTWithNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Items: ASTNode[], private Separators: Token[], private Operator2: Token, private TypeCcomment: Token, private Right: ASTNode) {
        super(startPos, endPos);
    }
}