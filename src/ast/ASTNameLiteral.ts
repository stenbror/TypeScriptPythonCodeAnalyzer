import { ASTNode } from "./ASTNode";
import { Trivia } from "../Token";
 
export class ASTNameLiteral extends ASTNode {
    constructor(startPos: number, endPos: number, private Trivias: Trivia[], private Name: string) {
        super(startPos, endPos);
    }
}