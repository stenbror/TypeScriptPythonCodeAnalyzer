
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
    private parensStack: TokenKind[];

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
        this.ch = this.SourceCode[this.pos++];
        this.parensStack = [];
    }

    private getChar() : string {
        if (this.pos < this.SourceCode.length) {
            return this.SourceCode.charAt(this.pos++);
        }
        return "\0";
    }

    private operatorOrDelimiter() : TokenKind {
        switch (this.ch) {
            case "<": {
                this.ch = this.getChar();
                if (this.ch === "<") {
                    this.ch = this.getChar();
                    if (this.ch === "=") {
                        this.ch = this.getChar();
                        return TokenKind.Py_ShiftLeftAssign;
                    }
                    return TokenKind.Py_ShiftLeft;
                }
                else if (this.ch === ">") {
                    this.ch = this.getChar();
                    return TokenKind.Py_NotEqual;
                }
                else if (this.ch === "=") {
                    this.ch = this.getChar();
                    return TokenKind.Py_LessEqual;
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
            
            default:
                return TokenKind.Empty;
        }
    }

    private isStartChar() : boolean {
        if (this.ch >= "a" && this.ch <= "z") return true;
        else if (this.ch >= "A" && this.ch <= "Z") return true;
        else if (this.ch === "_") return true;
        return false;
    }

    private isLetterCharOrDigit() : boolean {
        if (this.isStartChar()) return true;
        else if (this.ch >= "0" && this.ch <= "9") return true;
        return false;
    }

    private isDigit() : boolean {
        if (this.ch >= "0" && this.ch <= "9") return true;
        return false;
    }

    private isHexDigit() : boolean {
        if (this.ch >= "0" && this.ch <= "9") return true;
        else if (this.ch >= "a" && this.ch <= "f") return true;
        else if (this.ch >= "A" && this.ch <= "F") return true;
        return false;
    }

    private isOctetDigit() : boolean {
        if (this.ch >= "0" && this.ch <= "7") return true;
        return false;
    }

    private isBinaryDigit() : boolean {
        if (this.ch === "0" || this.ch === "1") return true;
        return false;
    }

    private indentifierOrReservedKeyword() : TokenKind {
        this.tokenStart = this.pos - 1;
        if (this.isStartChar()) {
            this.ch = this.getChar();
            while (this.isLetterCharOrDigit()) {
                this.ch = this.getChar();
            }
            const buf = this.SourceCode.substring(this.tokenStart, this.pos);
            if (this.keywords.has(buf)) {
                const res = this.keywords.get(buf);
                if (res !== undefined) {
                    return res;
                }
                return TokenKind.Name;
            }
            return TokenKind.Name;
        }
        return TokenKind.Empty;
    }

    private handleString() : StringLiteral {
        const quote = this.ch;
        let quoteSize = 1;
        let quoteEndSize = 0;
        this.ch = this.getChar();
        if (this.ch === quote) {
            this.ch = this.getChar();
            if (this.ch === quote) {
                quoteSize = 3;
                this.ch = this.getChar();
            }
            else {
                quoteSize = 1;
            }
        }
        while (quoteEndSize != quoteSize) {
            if (this.ch === "\0") {
                if (quoteSize !== 3) {
                    throw new LexicalErrorException(this.pos, "End of file found inside single quote string!");
                }
                // Handle correct here!
            }
            if (quoteSize === 1 && this.ch in [ "\r", "\n" ]) {
                throw new LexicalErrorException(this.pos, "Newline found inside single quote string!");
            }
            if (this.ch === quote) {
                quoteSize++;
            }
            else {
                quoteEndSize = 0;
                if (this.ch === "\\") { // Line continutaion followed by newline in single quote strings are allowed
                    this.ch = this.getChar();
                    if (this.ch === "\r") {
                        this.ch = this.getChar();
                        if (this.ch === "\n") {
                            this.ch = this.getChar();
                        }
                    }
                    else if (this.ch === "\n") {
                        this.ch = this.getChar();
                    }
                    else {
                        throw new LexicalErrorException(this.pos, "Expecting Newline after '\\' inside single quote string!");
                    }
                }
            }

            this.ch = this.getChar();
        }

        return new StringLiteral(this.tokenStart, this.pos, [], this.SourceCode.substring(this.tokenStart, this.pos));
    }

    // Public: Next token from source code. Parser calls this everytime it needs next token from source code ////////////////////

    public advance() : Token {




        /* Check for reserved keyword or name literal */
        if (this.isStartChar()) {
            const kind = this.indentifierOrReservedKeyword();
            if (kind !== TokenKind.Empty) {
                if (kind === TokenKind.Name) {
                    return new NameLiteral(this.tokenStart, this.pos, [], this.SourceCode.substring(this.tokenStart, this.pos));
                }
                else {
                    return new Token(this.tokenStart, this.pos, kind, []);
                }
            }
        }

        /* Handle newline - Token or Trivia */

        /* Period or start of Number */
        if (this.ch === ".") {    
            this.ch = this.getChar();
            if (this.isDigit()) {
                this.pos--;
                this.ch = ".";
            }
            if (this.ch === ".") {
                this.ch = this.getChar();
                if (this.ch === ".") {
                    this.ch = this.getChar();
                    return new Token(this.tokenStart, this.pos, TokenKind.Py_Elipsis, []);
                }
                this.pos--;
            }
            else {
                return new Token(this.tokenStart, this.pos, TokenKind.Py_Dot, []);
            }
        }

        /* Handle Numbers */
        if (this.isDigit() || this.ch === ".") {
            if (this.ch === "0") {
                this.ch = this.getChar();
                if (this.ch === "x" || this.ch === "X") {
                    this.ch = this.getChar();
                    do {
                        if (this.ch === "_") {
                            this.ch = this.getChar();
                        }
                        if (!this.isHexDigit()) {
                            throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in hex number!`);
                        }
                        do {
                            this.ch = this.getChar();
                        } while (this.isHexDigit());
                    } while (this.ch === "_");
                }
                else if (this.ch === "o" || this.ch === "O") {
                    this.ch = this.getChar();
                    do {
                        if (this.ch === "_") {
                            this.ch = this.getChar();
                        }
                        if (!this.isOctetDigit()) {
                            throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in octet number!`);
                        }
                        do {
                            this.ch = this.getChar();
                        } while (this.isOctetDigit());
                    } while (this.ch === "_");
                    if (this.isDigit()) {
                        throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in octet number!`);
                    }
                }
                else if (this.ch === "b" || this.ch === "B") {
                    this.ch = this.getChar();
                    do {
                        if (this.ch === "_") {
                            this.ch = this.getChar();
                        }
                        if (!this.isBinaryDigit()) {
                            throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in binary number!`);
                        }
                        do {
                            this.ch = this.getChar();
                        } while (this.isBinaryDigit());
                    } while (this.ch === "_");
                    if (this.isDigit()) {
                        throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in binary number!`);
                    }
                }
                else {
                    let nonZero = false;

                    if (this.ch !== ".") {

                        let lock = true;
                        while (lock) {
                            do {
                                if (this.isDigit() && this.ch != "0") nonZero = true;
                                this.ch = this.getChar();
                            } while (this.isDigit());
                            if (this.ch != "_") {
                                lock = false;
                                break;
                            }
                            this.ch = this.getChar();
                            if (!this.isDigit()) {
                                throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                            }
                        }
                    }

                    if (this.ch === ".") {
                        this.ch = this.getChar();
                        let lock = true;
                        while (lock) {
                            while (this.isDigit()) {
                                this.ch = this.getChar();
                            }
                            if (this.ch != "_") {
                                lock = false;
                                break;
                            }
                            this.ch = this.getChar();
                            if (!this.isDigit()) {
                                throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                            }
                        }
                    }

                    if (this.ch === "e" || this.ch === "E") {
                        this.ch = this.getChar();
                        if (this.ch === "+" || this.ch === "-") {
                            this.ch = this.getChar();
                            if (!this.isDigit()) throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                        }
                        else if (!this.isDigit()) throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);

                        let lock = true;
                        while (lock) {
                            while (this.isDigit()) {
                                this.ch = this.getChar();
                            }
                            if (this.ch != "_") {
                                lock = false;
                                break;
                            }
                            this.ch = this.getChar();
                            if (!this.isDigit()) {
                                throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                            }
                        }
                    }

                    if (this.ch === "j" || this.ch === "J") {
                        this.ch = this.getChar();
                    }


                    if (nonZero) throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number starting with '0' !`);
                }
            } 
            else {  /* Decimal */
                if (this.ch !== ".") {

                    let lock = true;
                    while (lock) {
                        do {
                            this.ch = this.getChar();
                        } while (this.isDigit());
                        if (this.ch != "_") {
                            lock = false;
                            break;
                        }
                        this.ch = this.getChar();
                        if (!this.isDigit()) {
                            throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                        }
                    }
                }

                if (this.ch === ".") {
                    this.ch = this.getChar();
                    let lock = true;
                    while (lock) {
                        while (this.isDigit()) {
                            this.ch = this.getChar();
                        }
                        if (this.ch != "_") {
                            lock = false;
                            break;
                        }
                        this.ch = this.getChar();
                        if (!this.isDigit()) {
                            throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                        }
                    }
                }

                if (this.ch === "e" || this.ch === "E") {
                    this.ch = this.getChar();
                    if (this.ch === "+" || this.ch === "-") {
                        this.ch = this.getChar();
                        if (!this.isDigit()) throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                    }
                    else if (!this.isDigit()) throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);

                    let lock = true;
                    while (lock) {
                        while (this.isDigit()) {
                            this.ch = this.getChar();
                        }
                        if (this.ch != "_") {
                            lock = false;
                            break;
                        }
                        this.ch = this.getChar();
                        if (!this.isDigit()) {
                            throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in number!`);
                        }
                    }
                }

                if (this.ch === "j" || this.ch === "J") {
                    this.ch = this.getChar();
                }

            }
            return new NumberLiteral(this.tokenStart, this.pos, [], this.SourceCode.substring(this.tokenStart, this.pos));
        }

        /* Handle string */
        if (this.ch === "'" || this.ch === "\"") return this.handleString();

        /* Operator or delimiters */
        {
            const kind = this.operatorOrDelimiter();
            if (kind !== TokenKind.Empty) {
                switch (kind) {
                    case TokenKind.Py_LeftParen:
                    case TokenKind.Py_LeftBracket:
                    case TokenKind.Py_LeftCurly:
                        this.parensStack.push(kind);
                        break;
                    case TokenKind.Py_RightParen:
                    case TokenKind.Py_RightBracket:
                    case TokenKind.Py_RightCurly: {
                        const openParens = this.parensStack.length > 0 ? this.parensStack.pop() : TokenKind.Empty;
                        if ( (openParens === TokenKind.Py_LeftParen && kind === TokenKind.Py_RightParen) ||
                             (openParens === TokenKind.Py_LeftBracket && kind === TokenKind.Py_RightBracket) ||
                             (openParens === TokenKind.Py_LeftCurly && kind === TokenKind.Py_RightCurly) ) {
                                break;
                            } 
                        
                        else {
                            throw new LexicalErrorException(this.pos, "No matching parenthezis found!");
                        }
                    }
                    default:
                        break;
                }
                return new Token(this.tokenStart, this.pos, kind, []);
            }
        }

        throw new LexicalErrorException(this.pos, `Illegal character '${this.ch}' in sourcecode!`);
    }
}

export default PythonCoreTokenizer;
