
// PythonCoreTokenizer
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral } from "./Token";

class PythonCoreTokenizer {

    constructor(private SourceCode: string) {
        
    }

    advance() : Token {
        return new Token(-1, -1, TokenKind.Empty, []);
    }
}

export default PythonCoreTokenizer;
