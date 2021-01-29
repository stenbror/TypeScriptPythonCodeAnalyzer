import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTSubscriptNode extends ASTNode {
    constructor(startPos: number, endPos: number, private One: ASTNode, private Operator1: Token, private Two: ASTNode, private Operator2: Token, private Three: ASTNode) {
        super(startPos, endPos);
    }
}