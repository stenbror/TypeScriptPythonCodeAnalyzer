import { ASTNode } from "./ASTNode";
import { StringLiteral } from "../Token";
 
export class ASTAtomStringNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Strings: StringLiteral[]) {
        super(startPos, endPos);
    }

    public getTokens() : StringLiteral[] {
        return this.Strings;
    }
}