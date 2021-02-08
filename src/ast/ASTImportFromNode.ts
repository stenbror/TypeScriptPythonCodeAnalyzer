import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTImportFromNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Operator1: Token, private Left: ASTNode, private DotsAndElispsi: Token[], private Operator2: Token, private Operator3: Token, private Right: ASTNode, private Operator4: Token) {
        super(startPos, endPos);
    }
}