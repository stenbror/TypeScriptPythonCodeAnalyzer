
export class ASTNode {
    constructor(private StartPosition: number = -1, private EndPosition: number = -1) {

    }

    public getStart() : number {
        return this.StartPosition;
    }

    public getEnd() : number {
        return this.EndPosition;
    }
}