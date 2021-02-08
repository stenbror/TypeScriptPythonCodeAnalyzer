import { ASTNode } from "./ASTNode";
import { Token } from "../Token";

export class ASTImportAsNamesNode extends ASTNode {
    constructor(startPos: number, endPos: number, private Nodes: ASTNode[], private Separators: Token[]) {
        super(startPos, endPos);
    }
}