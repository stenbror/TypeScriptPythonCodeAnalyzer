import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTDictionaryContainerNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Keys: ASTNode[], private Colon: Token[], private Values: ASTNode[], private Separators: Token[]) {
        super(startPos, endPos);
    }
}