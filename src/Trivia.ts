
// Trivia
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

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