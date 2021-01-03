
class SyntaxErrorException extends Error {
    private Position: number;
    private ErrorToken: Token;

    constructor(pos: number, text: string, token: Token) {
        super(text);
        this.Position = pos;
        this.ErrorToken = token;
        Object.setPrototypeOf(this, SyntaxErrorException.prototype);
    }
}


enum TriviaKind {
    Empty, WhiteSpace, NewLine, LineContinuation, Comment
}

class Trivia {
    private startPosition: number;
    private endPosition: number;
    private kind: TriviaKind;

    constructor(startPos: number, endPos: number, kind: TriviaKind) {
        this.startPosition = startPos;
        this.endPosition = endPos;
        this.kind = kind;
    }
}

enum TokenKind {
    Empty, EOF, Newline, Indent, Dedent, Py_False, Py_None, Py_True, Py_And, Py_As, Py_Assert, 
    Py_Async, Py_Await, Py_Break, Py_Class, Py_Continue, Py_Def, PyDel, Py_Elif, Py_Else, Py_Except, 
    Py_Finally, Py_For, Py_From, Py_Global, PyIf, Py_Import, Py_In, Py_Is, Py_Lambda, Py_Nonlocal,
    Py_Not, Py_Or, Py_Pass, Py_Raise, Py_Return, Py_Try, Py_While, Py_With, Py_Yield, PyPlus, Py_Minus, 
    Py_Mul, Py_Power, Py_Div, Py_FloorDiv, Py_Modulo, Py_Matrice, Py_ShiftLeft, Py_ShiftRight, Py_BitAnd,
    Py_BitOr, Py_BitXor, Py_BitInvert, Py_Less, Py_Greater, Py_LessEqual, Py_GreaterEqual, Py_Equal, 
    Py_NotEqual, Py_LeftParen, Py_RightParen, Py_LeftBracket, Py_RightBracket, Py_LeftCurly, Py_RightCurly, 
    Py_Comma, Py_Colon, PyColonAssign, Py_Dot, Py_Elipsis, Py_SemiColon, Py_Assign, Py_Arrow, Py_PlusAssign,
    Py_MinusAssign, Py_MulAssign, Py_PowerAssign, Py_DivAssign, Py_FloorDivAssign, Py_ModuloAssign, 
    Py_MatriceAssign, Py_BitAndAssign, Py_BitOrAssign, Py_BitXorAssign, Py_ShiftLeftAssign, Py_ShiftRightAssign, 
    Name, Number, String, TypeComment
}

class Token {
    private startPosition: number;
    private endPosition: number;
    private kind: TokenKind;
    private trivias: Trivia[];

    constructor(startPos: number, endPos: number, kind: TokenKind, trivias: Trivia[]) {
        this.startPosition = startPos;
        this.endPosition = endPos;
        this.kind = kind;
        this.trivias = trivias;
    }

    getStartPosition() : number {
        return this.startPosition;
    }

    getEndPosition() : number {
        return this.endPosition;
    }

    getKind() : TokenKind {
        return this.kind;
    }
}

class NameLiteral extends Token {
    private name: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], name: string) {
        super(startPos, endPos, TokenKind.Name, trivias);
        this.name = name;
    }
}

class NumberLiteral extends Token {
    private literal: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], literal: string) {
        super(startPos, endPos, TokenKind.Number, trivias);
        this.literal = literal;
    }
}

class StringLiteral extends Token {
    private literal: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], literal: string) {
        super(startPos, endPos, TokenKind.String, trivias);
        this.literal = literal;
    }
}

class TypeComment extends Token {
    private comment: string;

    constructor(startPos: number, endPos: number, trivias: Trivia[], comment: string) {
        super(startPos, endPos, TokenKind.TypeComment, trivias);
        this.comment = comment;
    }
}











class ASTNode {
    private startPosition: number;
    private endPosition: number;

    constructor(startPos = -1, endPos = -1) {
        this.startPosition = startPos;
        this.endPosition = endPos;
    }
}

class ASTAtomNoneNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomFalseNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomTrueNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomElipsisNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomNameNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomNumberNode extends ASTNode {
    private Operator1: Token;

    constructor(startPos: number, endPos: number, operator1: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
    }
}

class ASTAtomStringNode extends ASTNode {
    private Operators: Token[];

    constructor(startPos: number, endPos: number, operators: Token[]) {
        super(startPos, endPos);
        this.Operators = operators;
    }
}

class ASTTupleLiteral extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode, op2: Token) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op2;
        this.Right = right;
    }
}

class ASTListLiteral extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode, op2: Token) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op2;
        this.Right = right;
    }
}

class ASTDicitionaryLiteral extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode, op2: Token) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op2;
        this.Right = right;
    }
}

class ASTAtomExpr extends ASTNode {
    private Operator1: Token;
    private Left: ASTNode;
    private Nodes: ASTNode[];

    constructor(startPos: number, endPos: number, op1: Token, left: ASTNode, nodes: ASTNode[]) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Left = left;
        this.Nodes = nodes;
    }
}








class PythonCoreParser {
    private curSymbol: Token;

    constructor() {
        this.curSymbol = new Token(-1, -1, TokenKind.Empty, []);
    }

    advance() {
        
    }


    parseAtom() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const op1 = this.curSymbol;
        switch (this.curSymbol.getKind())
        {
            case TokenKind.Py_None:
                this.advance();
                return new ASTAtomNoneNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_False:
                this.advance();
                return new ASTAtomFalseNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_True:
                this.advance();
                return new ASTAtomTrueNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Py_Elipsis:
                this.advance();
                return new ASTAtomElipsisNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Name:
                this.advance();
                return new ASTAtomNameNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.Number:
                this.advance();
                return new ASTAtomNumberNode(startPos, this.curSymbol.getStartPosition(), op1);
            case TokenKind.String: {
                const nodes : StringLiteral[] = [];
                nodes.push(<StringLiteral>this.curSymbol);
                this.advance();
                while (this.curSymbol.getKind() == TokenKind.String) {
                    nodes.push(<StringLiteral>this.curSymbol);
                    this.advance();
                }
                return new ASTAtomStringNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse());
            }
            case TokenKind.Py_LeftParen: {
                this.advance();
                if (this.curSymbol.getKind() == TokenKind.Py_RightParen) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else if (this.curSymbol.getKind() == TokenKind.Py_Yield) {
                    const right = new ASTNode(); // yieldExpr
                    if (this.curSymbol.getKind() == TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ')' in tuple literal!", this.curSymbol);
                    }
                }
                else {
                    const right = new ASTNode(); // testlist_comp
                    if (this.curSymbol.getKind() == TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ')' in tuple literal!", this.curSymbol);
                    }
                }
            }
            case TokenKind.Py_LeftBracket: {
                this.advance();
                if (this.curSymbol.getKind() == TokenKind.Py_RightBracket) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTListLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = new ASTNode(); // testlist_comp
                    if (this.curSymbol.getKind() == TokenKind.Py_RightBracket) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTListLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ']' in tuple literal!", this.curSymbol);
                    }
                }
            }
            case TokenKind.Py_LeftCurly: {
                this.advance();
                if (this.curSymbol.getKind() == TokenKind.Py_RightCurly) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTDicitionaryLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = new ASTNode(); // testlist_comp
                    if (this.curSymbol.getKind() == TokenKind.Py_RightCurly) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTDicitionaryLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing '}' in tuple literal!", this.curSymbol);
                    }
                }
            }
            default :
                throw new SyntaxErrorException(startPos, "Illegal literal!", this.curSymbol);
        }
    }

    parseAtomExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() == TokenKind.Py_Async)
        {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseAtom();
            const nodes : ASTNode[] = [];
            while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ])
            {
                nodes.push( new ASTNode() ); // parseTrailer
            }
            return new ASTAtomExpr(startPos, this.curSymbol.getStartPosition(), op1, left, nodes.reverse());
        }
        const left = this.parseAtom();
        const nodes : ASTNode[] = [];
        while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ])
        {
            nodes.push( new ASTNode() ); // parseTrailer
        }
        return new ASTAtomExpr(startPos, this.curSymbol.getStartPosition(), new Token(-1, -1, TokenKind.Empty, []), left, nodes.reverse());
    }
}