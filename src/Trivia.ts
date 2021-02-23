

export enum TriviaKind {
    Empty, WhiteSpace, NewLine, LineContinuation, Comment
}

export class Trivia {
    private startPosition: number;
    private endPosition: number;
    private kind: TriviaKind;
    private content: string;

    constructor(startPos: number, endPos: number, kind: TriviaKind, content: string) {
        this.startPosition = startPos;
        this.endPosition = endPos;
        this.kind = kind;
        this.content = content;
    }
}