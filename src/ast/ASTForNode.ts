import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTForNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Left: ASTNode, private Operator2: Token, private Right: ASTNode, private Operator3: Token, private Operator4: Token, private Next: ASTNode, private ElsePart: ASTNode) {
        super(startPos, endPos);
    }
}