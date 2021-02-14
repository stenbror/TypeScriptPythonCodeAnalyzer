
// PythonCoreTokenizer
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral } from "./Token";


class PythonCoreTokenizer {

    private keywords: Map<string, TokenKind>;   // Reserved keywords in Python grammar
    private pos: number;    // Index into source code buffer
    private tokenStart: number; // Start of current token beeing analyzed by lexer
    private ch: string; // Current character to be analuzed in lexer.

    constructor(private SourceCode: string) {

        this.keywords = new Map<string, TokenKind>(
            [
                [ "False",      TokenKind.Py_False ],
                [ "None",       TokenKind.Py_None ],
                [ "True",       TokenKind.Py_True ],
                [ "and",        TokenKind.Py_And ],
                [ "as",         TokenKind.Py_As ],
                [ "assert",     TokenKind.Py_Assert ],
                [ "async",      TokenKind.Py_Async ],
                [ "await",      TokenKind.Py_Await ],
                [ "break",      TokenKind.Py_Break ],
                [ "class",      TokenKind.Py_Class ],
                [ "continue",   TokenKind.Py_Continue ],
                [ "def",        TokenKind.Py_Def ],
                [ "del",        TokenKind.Py_Del ],
                [ "elif",       TokenKind.Py_Elif ],
                [ "else",       TokenKind.Py_Else ],
                [ "except",     TokenKind.Py_Except ],
                [ "finally",    TokenKind.Py_Finally ],
                [ "for",        TokenKind.Py_For ],
                [ "from",       TokenKind.Py_From ],
                [ "global",     TokenKind.Py_Global ],
                [ "if",         TokenKind.Py_If ],
                [ "import",     TokenKind.Py_Import ],
                [ "in",         TokenKind.Py_In ],
                [ "is",         TokenKind.Py_Is ],
                [ "lambda",     TokenKind.Py_Lambda ],
                [ "nonlocal",   TokenKind.Py_Nonlocal ],
                [ "not",        TokenKind.Py_Not ],
                [ "or",         TokenKind.Py_Or ],
                [ "pass",       TokenKind.Py_Pass ],
                [ "raise",      TokenKind.Py_Raise ],
                [ "return",     TokenKind.Py_Return ],
                [ "try",        TokenKind.Py_Try ],
                [ "while",      TokenKind.Py_While ],
                [ "with",       TokenKind.Py_With ],
                [ "yield",      TokenKind.Py_Yield ]
            ]
        );

        this.pos = 0;
        this.tokenStart = 0;
        this.ch = "";
    }

    private getChar() : string {
        if (this.pos >= this.SourceCode.length || this.pos < 0) return "\0";
        return this.SourceCode.charAt(this.pos++);
    }

    private operatorOrDelimiter() : TokenKind {
        switch (this.ch) {
            case "<": {
                this.ch = this.getChar();
                if (this.ch === "<") {
                    this.ch = this.getChar();
                    if (this.ch === "=" ) {
                        this.ch = this.getChar();
                        return TokenKind.Py_ShiftLeftAssign;
                    }
                    return TokenKind.Py_ShiftLeft;
                }
                else if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_LessEqual;
                }
                else if (this.ch === ">" ) {
                    this.ch = this.getChar();
                    return TokenKind.Py_NotEqual;
                }
                else return TokenKind.Py_Less;
            }
            case ">": {
                this.ch = this.getChar();
                if (this.ch === ">") {
                    this.ch = this.getChar();
                    if (this.ch === "=" ) {
                        this.ch = this.getChar();
                        return TokenKind.Py_ShiftRightAssign;
                    }
                    return TokenKind.Py_ShiftRight;
                }
                else if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_GreaterEqual;
                }
                else return TokenKind.Py_Greater;
            }

            default:
                return TokenKind.Empty;
        }
    }

    advance() : Token {
        return new Token(-1, -1, TokenKind.Empty, []);
    }
}

export default PythonCoreTokenizer;
