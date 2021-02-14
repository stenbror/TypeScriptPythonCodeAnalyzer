
// PythonCoreTokenizer
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral } from "./Token";

export class LexicalErrorException extends Error {
    constructor(private Position: number, private text: string) {
        super(text);
        Object.setPrototypeOf(this, LexicalErrorException.prototype);
    }
}

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
                return TokenKind.Py_Less;
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
                return TokenKind.Py_Greater;
            }
            case "*": {
                this.ch = this.getChar();
                if (this.ch === "*") {
                    this.ch = this.getChar();
                    if (this.ch === "=") {
                        this.ch = this.getChar();
                        return TokenKind.Py_PowerAssign;
                    }
                    return TokenKind.Py_Power;
                }
                else if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_MulAssign;
                }
                return TokenKind.Py_Mul;
            }
            case "/": {
                this.ch = this.getChar();
                if (this.ch === "/") {
                    this.ch = this.getChar();
                    if (this.ch === "=") {
                        this.ch = this.getChar();
                        return TokenKind.Py_FloorDivAssign;
                    }
                    return TokenKind.Py_FloorDiv;
                }
                else if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_DivAssign;
                }
                return TokenKind.Py_Div;
            }
            case ":": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_ColonAssign;
                }
                return TokenKind.Py_Colon;
            }
            case "+": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_PlusAssign;
                }
                return TokenKind.Py_Plus;
            }
            case "-": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_MinusAssign;
                }
                else if (this.ch === ">") {
                    this.ch = this.getChar();
                    return TokenKind.Py_Arrow;
                }
                return TokenKind.Py_Minus;
            }
            case "%": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_ModuloAssign;
                }
                return TokenKind.Py_Modulo;
            }
            case "@": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_MatriceAssign;
                }
                return TokenKind.Py_Matrice;
            }
            case "&": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_BitAndAssign;
                }
                return TokenKind.Py_BitAnd;
            }
            case "|": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_BitOrAssign;
                }
                return TokenKind.Py_BitOr;
            }
            case "^": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_BitXorAssign;
                }
                return TokenKind.Py_BitXor;
            }
            case "=": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_Equal;
                }
                return TokenKind.Py_Assign;
            }
            case "!": {
                this.ch = this.getChar();
                if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_NotEqual;
                }
                throw new LexicalErrorException(this.pos, "Expecting '!=', buf found only '!'");
            }
            case "~": {
                this.ch = this.getChar();
                return TokenKind.Py_BitInvert;
            }
            case "(": {
                this.ch = this.getChar();
                return TokenKind.Py_LeftParen;
            }
            case "[": {
                this.ch = this.getChar();
                return TokenKind.Py_LeftBracket;
            }
            case "{": {
                this.ch = this.getChar();
                return TokenKind.Py_LeftCurly;
            }
            case ")": {
                this.ch = this.getChar();
                return TokenKind.Py_RightParen;
            }
            case "]": {
                this.ch = this.getChar();
                return TokenKind.Py_RightBracket;
            }
            case "}": {
                this.ch = this.getChar();
                return TokenKind.Py_RightCurly;
            }
            case ",": {
                this.ch = this.getChar();
                return TokenKind.Py_Comma;
            }
            case ";": {
                this.ch = this.getChar();
                return TokenKind.Py_SemiColon;
            }
            case ".": {
                this.ch = this.getChar();
                if (this.ch === ".") {
                    this.ch = this.getChar();
                    if (this.ch === ".") {
                        this.ch = this.getChar();
                        return TokenKind.Py_Elipsis;
                    }
                    this.pos--;
                }
                return TokenKind.Py_Dot;
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
