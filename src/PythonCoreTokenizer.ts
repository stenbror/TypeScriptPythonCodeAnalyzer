
// PythonCoreTokenizer
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral } from "./Token";


class PythonCoreTokenizer {

    private keywords: Map<string, TokenKind>;

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
    }

    advance() : Token {
        return new Token(-1, -1, TokenKind.Empty, []);
    }
}

export default PythonCoreTokenizer;
