import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTSubscriptListNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: ASTNode[], private Commas: Token[]) {
        super(startPos, endPos);
    }
}