import { ASTNode } from "./ASTNode";
import { NumberLiteral } from "../Token";
 
export class ASTAtomNumberNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Number: NumberLiteral) {
        super(startPos, endPos);
    }

    public getToken() : NumberLiteral {
        return this.Number;
    }
}