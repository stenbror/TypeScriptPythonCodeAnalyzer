import { ASTNode } from "./ASTNode";
import { NameLiteral } from "../Token";
 
export class ASTAtomNameNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Name: NameLiteral) {
        super(startPos, endPos);
    }
}