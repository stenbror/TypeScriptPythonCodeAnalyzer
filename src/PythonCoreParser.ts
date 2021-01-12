
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
    Py_Finally, Py_For, Py_From, Py_Global, Py_If, Py_Import, Py_In, Py_Is, Py_Lambda, Py_Nonlocal,
    Py_Not, Py_Or, Py_Pass, Py_Raise, Py_Return, Py_Try, Py_While, Py_With, Py_Yield, Py_Plus, Py_Minus, 
    Py_Mul, Py_Power, Py_Div, Py_FloorDiv, Py_Modulo, Py_Matrice, Py_ShiftLeft, Py_ShiftRight, Py_BitAnd,
    Py_BitOr, Py_BitXor, Py_BitInvert, Py_Less, Py_Greater, Py_LessEqual, Py_GreaterEqual, Py_Equal, 
    Py_NotEqual, Py_LeftParen, Py_RightParen, Py_LeftBracket, Py_RightBracket, Py_LeftCurly, Py_RightCurly, 
    Py_Comma, Py_Colon, Py_ColonAssign, Py_Dot, Py_Elipsis, Py_SemiColon, Py_Assign, Py_Arrow, Py_PlusAssign,
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

class ASTSetLiteral extends ASTNode {
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

class ASTPowerExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTUnaryPlus extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTUnaryMinus extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTUnaryBitInvert extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTMulExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTDivExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTFloorDivExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTModuloExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTMatriceExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTPlusExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTMinusExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTShiftLeftExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTShiftRightExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTBitAndExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTBitXorExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTBitOrExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTStarExpr extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTLessExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTLessEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTGreaterExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTGreaterEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTNotEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTEqualExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTInExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTNotInExpr extends ASTNode {
    private Left : ASTNode;
    private Operator1: Token;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator1: Token, operator2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator1 = operator1;
        this.Operator2 = operator2;
        this.Right = right;
    }
}

class ASTIsNotExpr extends ASTNode {
    private Left : ASTNode;
    private Operator1: Token;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator1: Token, operator2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator1 = operator1;
        this.Operator2 = operator2;
        this.Right = right;
    }
}

class ASTIsExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTNotTest extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTAndTest extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTOrTest extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTLambdaExpr extends ASTNode {
    private Operator1: Token;
    private Left : ASTNode;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator1: Token, left: ASTNode, operator2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Left = left;
        this.Operator2 = operator2;
        this.Right = right;
    }
}

class ASTTestExpr extends ASTNode {
    private Left : ASTNode;
    private Operator1: Token;
    private Right : ASTNode;
    private Operator2: Token;
    private Next: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator1: Token, right: ASTNode, operator2: Token, next: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator1 = operator1;
        this.Right = right;
        this.Operator2 = operator2;
        this.Next = next;
    }
}

class ASTNamedExpr extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTTestListComp extends ASTNode {
    private Nodes : ASTNode[];
    private Commas: Token[];
    
    constructor(startPos: number, endPos: number, nodes: ASTNode[], commas: Token[]) {
        super(startPos, endPos);
        this.Nodes = nodes;
        this.Commas = commas;
    }
}

class ASTDotName extends ASTNode {
    private Operator1: Token;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, operator1: Token, operator2: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Operator2 = operator2;
    }
}

class ASTCallNode extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, operator1: Token, right : ASTNode, operator2: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Right = right;
        this.Operator2 = operator2;
    }
}

class ASTIndexNode extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Operator2: Token;

    constructor(startPos: number, endPos: number, operator1: Token, right : ASTNode, operator2: Token) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Right = right;
        this.Operator2 = operator2;
    }
}

class ASTSubscriptListNode extends ASTNode {
    private Nodes : ASTNode[];
    private Commas: Token[];
    
    constructor(startPos: number, endPos: number, nodes: ASTNode[], commas: Token[]) {
        super(startPos, endPos);
        this.Nodes = nodes;
        this.Commas = commas;
    }
}

class ASTSubscriptNode extends ASTNode {
    private From: ASTNode;
    private Operator1: Token;
    private To: ASTNode;
    private Operator2: Token;
    private Step: ASTNode;

    constructor(startPos: number, endPos: number, one: ASTNode, op1: Token, two: ASTNode, op2: Token, three: ASTNode) {
        super(startPos, endPos);
        this.From = one;
        this.Operator1 = op1;
        this.To = two;
        this.Operator2 = op2;
        this.Step = three;
    }
}

class ASTExprListNode extends ASTNode {
    private Nodes : ASTNode[];
    private Commas: Token[];
    
    constructor(startPos: number, endPos: number, nodes: ASTNode[], commas: Token[]) {
        super(startPos, endPos);
        this.Nodes = nodes;
        this.Commas = commas;
    }
}

class ASTTestListNode extends ASTNode {
    private Nodes : ASTNode[];
    private Commas: Token[];
    
    constructor(startPos: number, endPos: number, nodes: ASTNode[], commas: Token[]) {
        super(startPos, endPos);
        this.Nodes = nodes;
        this.Commas = commas;
    }
}

class ASTCompForNode extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTSyncCompForNode extends ASTNode {
    private Operator1: Token;
    private Left: ASTNode;
    private Operator2: Token;
    private Right: ASTNode;
    private Next: ASTNode;

    constructor(startPos: number, endPos: number, operator1: Token, left : ASTNode, operator2: Token, right: ASTNode, next: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Left = left;
        this.Operator2 = operator2;
        this.Right = right;
        this.Next = next;
    }
}

class ASTCompIfNode extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;
    private Next: ASTNode;

    constructor(startPos: number, endPos: number, operator1: Token, right: ASTNode, next: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Right = right;
        this.Next = next;
    }
}

class ASTYieldFromNode extends ASTNode {
    private Operator1: Token;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator1: Token, operator2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Operator2 = operator2;
        this.Right = right;
    }
}

class ASTYieldNode extends ASTNode {
    private Operator1: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, operator1: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = operator1;
        this.Right = right;
    }
}

class ASTArgListNode extends ASTNode {
    private Nodes : ASTNode[];
    private Commas: Token[];
    
    constructor(startPos: number, endPos: number, nodes: ASTNode[], commas: Token[]) {
        super(startPos, endPos);
        this.Nodes = nodes;
        this.Commas = commas;
    }
}

class ASTArgumentNode extends ASTNode {
    private Left : ASTNode;
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, left: ASTNode, operator: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Left = left;
        this.Operator = operator;
        this.Right = right;
    }
}

class ASTDictionaryContainerNode extends ASTNode {
    private Keys: ASTNode[];
    private Colon: Token[];
    private Values: ASTNode[];
    private Separators: Token[];

    constructor(startPos: number, endPos: number, keys: ASTNode[], colon: Token[], values: ASTNode[], separators: Token[]) {
        super(startPos, endPos);
        this.Keys = keys;
        this.Colon = colon;
        this.Values = values;
        this.Separators = separators;
    }
}

class ASTSetContainerNode extends ASTNode {
    private Keys: ASTNode[];
    private Separators: Token[];

    constructor(startPos: number, endPos: number, keys: ASTNode[], separators: Token[]) {
        super(startPos, endPos);
        this.Keys = keys;
        this.Separators = separators;
    }
}

class ASTSetNameNode extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = op1;
        this.Right = right;
    }
}

class ASTDictionaryNameNode extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = op1;
        this.Right = right;
    }
}

class ASTAsyncNode extends ASTNode {
    private Operator: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator = op1;
        this.Right = right;
    }
}

class ASTClassNode extends ASTNode {
    private Operator1: Token;
    private Operator2: Token;
    private Operator3: Token;
    private Operator4: Token;
    private Operator5: Token;
    private Left: ASTNode;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, op2: Token, op3: Token, left: ASTNode, op4: Token, op5: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op1;
        this.Operator3 = op1;
        this.Operator4 = op1;
        this.Operator5 = op1;
        this.Left = left;
        this.Right = right;
    }
}

class ASTIfNode extends ASTNode {
    private Operator1: Token;
    private Left: ASTNode;
    private Operator2: Token;
    private Right: ASTNode;
    private ElifNodes: ASTNode[];
    private ElseNode: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, left: ASTNode, op2: Token, right: ASTNode, elifNodes: ASTNode[], elseNode: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Left = left;
        this.Operator2 = op2;
        this.Right = right;
        this.ElifNodes = elifNodes;
        this.ElseNode = elseNode;
    }
}

class ASTElifNode extends ASTNode {
    private Operator1: Token;
    private Left: ASTNode;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, left: ASTNode, op2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Left = left;
        this.Operator2 = op1;
        this.Right = right;
    }
}

class ASTElseNode extends ASTNode {
    private Operator1: Token;
    private Operator2: Token;
    private Right: ASTNode;

    constructor(startPos: number, endPos: number, op1: Token, op2: Token, right: ASTNode) {
        super(startPos, endPos);
        this.Operator1 = op1;
        this.Operator2 = op1;
        this.Right = right;
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
                while (this.curSymbol.getKind() === TokenKind.String) {
                    nodes.push(<StringLiteral>this.curSymbol);
                    this.advance();
                }
                return new ASTAtomStringNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse());
            }
            case TokenKind.Py_LeftParen: {
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                    const right = this.parseYieldExpr();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTTupleLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing ')' in tuple literal!", this.curSymbol);
                    }
                }
                else {
                    const right = this.parseTestListComp();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
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
                if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTListLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = this.parseTestListComp();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) {
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
                if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTDicitionaryLiteral(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = this.parseDictorSetMaker();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) {
                        const op2 = this.curSymbol;
                        this.advance();
                        if (typeof(right) === typeof(ASTDictionaryContainerNode)) {
                            return new ASTDicitionaryLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                        }
                        return new ASTSetLiteral(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing '}' in dictionary / set literal!", this.curSymbol);
                    }
                }
            }
            default :
                throw new SyntaxErrorException(startPos, "Illegal literal!", this.curSymbol);
        }
    }

    parseAtomExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseAtom();
            const nodes : ASTNode[] = [];
            while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
                nodes.push( this.parseTrailer() );
            }
            return new ASTAtomExpr(startPos, this.curSymbol.getStartPosition(), op1, left, nodes.reverse());
        }
        const left = this.parseAtom();
        const nodes : ASTNode[] = [];
        while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
            nodes.push( this.parseTrailer() );
        }
        return new ASTAtomExpr(startPos, this.curSymbol.getStartPosition(), new Token(-1, -1, TokenKind.Empty, []), left, nodes.reverse());
    }

    parsePower() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseAtomExpr();
        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            return new ASTPowerExpr(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    parseFactor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const op1 = this.curSymbol;
        switch (op1.getKind()) {
            case TokenKind.Py_Plus: {
                const right = this.parseFactor();
                return new ASTUnaryPlus(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_Minus: {
                const right = this.parseFactor();
                return new ASTUnaryMinus(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_BitInvert: {
                const right = this.parseFactor();
                return new ASTUnaryBitInvert(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            default:
                return this.parsePower();
        }
    }

    parseTerm() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseFactor();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Mul, TokenKind.Py_Div, TokenKind.Py_FloorDiv, TokenKind.Py_Modulo, TokenKind.Py_Matrice ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            switch (op1.getKind()) {
                case TokenKind.Py_Mul: 
                    res = new ASTMulExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Div: 
                    res = new ASTDivExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_FloorDiv: 
                    res = new ASTFloorDivExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Modulo: 
                    res = new ASTModuloExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Matrice: 
                    res = new ASTMatriceExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    parseArith() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseTerm();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Plus, TokenKind.Py_Minus ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTerm();
            switch (op1.getKind()) {
                case TokenKind.Py_Plus: 
                    res = new ASTPlusExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Minus: 
                    res = new ASTMinusExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    parseShiftExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseArith();
        while (this.curSymbol.getKind() in [ TokenKind.Py_ShiftLeft, TokenKind.Py_ShiftRight ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseArith();
            switch (op1.getKind()) {
                case TokenKind.Py_ShiftLeft: 
                    res = new ASTShiftLeftExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_ShiftRight: 
                    res = new ASTShiftRightExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    parseAndExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseShiftExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitAnd) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseShiftExpr();
            res = new ASTBitAndExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseXorExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseAndExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitXor) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseAndExpr();
            res = new ASTBitXorExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseOrExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseXorExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitOr) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseXorExpr();
            res = new ASTBitOrExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseStarExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrExpr();
            return new ASTStarExpr(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(startPos, "Missing '*' in star expression!", this.curSymbol);
    }

    parseComparisonExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseOrExpr();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Less, TokenKind.Py_LessEqual, TokenKind.Py_Equal, TokenKind.Py_GreaterEqual, TokenKind.Py_Greater, TokenKind.Py_NotEqual, TokenKind.Py_Is, TokenKind.Py_In, TokenKind.Py_Not ]) {
            const op1 = this.curSymbol;
            this.advance();
            switch (op1.getKind()) {
                case TokenKind.Py_Less: {
                    const right = this.parseOrExpr();
                    res = new ASTLessExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_LessEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTLessEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Equal: {
                    const right = this.parseOrExpr();
                    res = new ASTEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_GreaterEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Greater: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_NotEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTNotEqualExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_In: {
                    const right = this.parseOrExpr();
                    res = new ASTInExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Is: {
                    if (this.curSymbol.getKind() === TokenKind.Py_Not) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTIsNotExpr(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
                    }
                    else {
                        const right = this.parseOrExpr();
                        res = new ASTIsExpr(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    }
                    break;
                }
                case TokenKind.Py_Not: {
                    if (this.curSymbol.getKind() === TokenKind.Py_In) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTNotInExpr(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
                    }
                    else {
                        throw new SyntaxErrorException(startPos, "Missing 'in' in 'not in' expression!", this.curSymbol);
                    }
                    break;
                }
            }
        }
        return res;
    }

    parseNotTest() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Not) {
            const startPos = this.curSymbol.getStartPosition();
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseNotTest();
            return new ASTNotTest(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        return this.parseComparisonExpr();
    }

    parseAndTest() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseNotTest();
        while (this.curSymbol.getKind() === TokenKind.Py_And) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseNotTest();
            res = new ASTAndTest(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseOrTest() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseAndTest();
        while (this.curSymbol.getKind() === TokenKind.Py_Or) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseAndTest();
            res = new ASTOrTest(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    parseLambdaExpr(isCond: boolean) : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            let left = new ASTNode();
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                left = new ASTNode(); // this.parseVarArgsList();
            }
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                throw new SyntaxErrorException(startPos, "Missing ':' in 'lambda' expression!", this.curSymbol);
            }
            const op2 = this.curSymbol;
            this.advance();
            if (isCond) {
                const right = this.parseTest();
                return new ASTLambdaExpr(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }
            else {
                const right = this.parseTestNoCond();
                return new ASTLambdaExpr(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }

        }
        throw new SyntaxErrorException(startPos, "Missing 'lambda' keyword in 'lambda' expression!", this.curSymbol);
    }

    parseTestNoCond() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            return this.parseLambdaExpr(false);
        }
        return this.parseOrTest();
    }

    parseTest() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            return this.parseLambdaExpr(true);
        }
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseOrTest();
        if (this.curSymbol.getKind() === TokenKind.Py_If) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrTest();
            if (this.curSymbol.getKind() != TokenKind.Py_Else) {
                throw new SyntaxErrorException(startPos, "Missing 'else' keyword in test expression!", this.curSymbol);
            }
            const op2 = this.curSymbol;
            this.advance();
            const next = this.parseTest();
            return new ASTTestExpr(startPos, this.curSymbol.getStartPosition(), left, op1, right, op2, next);
        }
        return left;
    }

    parseNamedExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_ColonAssign) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTNamedExpr(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    parseTestListComp() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const commas : Token[] = [];
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            nodes.push( this.parseStarExpr() );
        }
        else {
            nodes.push( this.parseNamedExpr() );
        }
        if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For ]) {
            nodes.push( this.parseCompFor() );
        }
        else {
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                commas.push( this.curSymbol );
                this.advance();
                switch (this.curSymbol.getKind()) {
                    case TokenKind.Py_Comma:
                        throw new SyntaxErrorException(startPos, "Missing item in list between two commas!", this.curSymbol);
                    case TokenKind.Py_RightParen:
                    case TokenKind.Py_RightBracket:
                        break;
                    case TokenKind.Py_Mul:
                        nodes.push( this.parseStarExpr() );
                        break;
                    default:
                        nodes.push( this.parseNamedExpr() );
                        break;
                }
            }
        }
        return new ASTTestListComp(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), commas.reverse());
    }

    parseTrailer() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Dot: {
                const op1 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() != TokenKind.Name) {
                    throw new SyntaxErrorException(startPos, "Missing name literal after '.'", this.curSymbol);
                }
                const op2 = this.curSymbol;
                this.advance();
                return new ASTDotName(startPos, this.curSymbol.getStartPosition(), op1, op2);
            }
            case TokenKind.Py_LeftParen: {
                const op1 = this.curSymbol;
                this.advance();
                let right = new ASTNode();
                if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                    right = this.parseArgList();
                }
                if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                    throw new SyntaxErrorException(startPos, "Missing ')' in call expression!", this.curSymbol);
                }
                const op2 = this.curSymbol;
                this.advance();
                return new ASTCallNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
            }
            case TokenKind.Py_LeftBracket: {
                const op1 = this.curSymbol;
                this.advance();
                let right = new ASTNode();
                if (this.curSymbol.getKind() != TokenKind.Py_RightBracket) {
                    right = this.parseSubscriptList();
                }
                if (this.curSymbol.getKind() != TokenKind.Py_RightBracket) {
                    throw new SyntaxErrorException(startPos, "Missing ']' in index expression!", this.curSymbol);
                }
                const op2 = this.curSymbol;
                this.advance();
                return new ASTIndexNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
            }
            default:
                throw new SyntaxErrorException(startPos, "Expecting '.', '(' or '['", this.curSymbol);
        }
    }

    parseSubscriptList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        nodes.push( this.parseSubscript() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) break;
            nodes.push( this.parseSubscript() );
        }
        return new ASTSubscriptListNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseSubscript() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let from = new ASTNode();
        let op1 = new Token(-1, -1, TokenKind.Empty, []);
        let to = new ASTNode();
        let op2 = new Token(-1, -1, TokenKind.Empty, []);
        let step = new ASTNode();
        if (this.curSymbol.getKind() != TokenKind.Py_Colon) from = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
            op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() != TokenKind.Py_Comma && this.curSymbol.getKind() != TokenKind.Py_RightBracket && this.curSymbol.getKind() != TokenKind.Py_Colon) to = this.parseTest();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() != TokenKind.Py_Comma && this.curSymbol.getKind() != TokenKind.Py_RightBracket) step = this.parseTest();
            }
        }
        return new ASTSubscriptNode(startPos, this.curSymbol.getStartPosition(), from, op1, to, op2, step);
    }

    parseExprList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            nodes.push( this.parseStarExpr() );
        }
        else {
            nodes.push( this.parseOrExpr() );
        }
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push(this.curSymbol);
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_In) break;
            else if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                nodes.push( this.parseStarExpr() );
            }
            else {
                nodes.push( this.parseOrExpr() );
            }
        }
        return new ASTExprListNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseTestList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        nodes.push( this.parseTest() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push(this.curSymbol);
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Newline:
                case TokenKind.Py_SemiColon:
                    break;
                default:
                    nodes.push( this.parseTest() );
            }
        }
        return new ASTTestListNode(startPos, this.curSymbol.getStartPosition(), nodes.reverse(), separators.reverse());
    }

    parseDictorSetMaker() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const keys : ASTNode[] = [];
        const colons : Token[] = [];
        const values : ASTNode[] = [];
        const separators : Token[] = [];
        let isDict = false;
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Mul: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.parseOrExpr();
                keys.push( new ASTSetNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                break;
            }
            case TokenKind.Py_Power: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.parseOrExpr();
                keys.push( new ASTDictionaryNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                break;
            }
            default: {
                keys.push( this.parseTest() );
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    isDict = true;
                    colons.push( this.curSymbol );
                    this.advance();
                    values.push( this.parseTest() );
                }
                break;
            }
        }
        if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For ]) {
            keys.push( this.parseCompFor() );
        }
        else if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) break;
                switch (this.curSymbol.getKind()) {
                    case TokenKind.Py_Mul: {
                        const op1 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        keys.push( new ASTSetNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                        break;
                    }
                    case TokenKind.Py_Power: {
                        const op1 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        keys.push( new ASTDictionaryNameNode(startPos, this.curSymbol.getStartPosition(), op1, right) );
                        break;
                    }
                    default: {
                        keys.push( this.parseTest() );
                        if (isDict) {
                            if (this.curSymbol.getKind() == TokenKind.Py_Colon) {
                                colons.push( this.curSymbol );
                                this.advance();
                                values.push( this.parseTest() );
                            }
                            else {
                                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in dictionary!", this.curSymbol);
                            }
                        }
                        break;
                    }
                }
            }
        }
        if (isDict) {
            return new ASTDictionaryContainerNode(startPos, this.curSymbol.getStartPosition(), keys.reverse(), colons.reverse(), values.reverse(), separators.reverse());
        }
        return new ASTSetContainerNode(startPos, this.curSymbol.getStartPosition(), keys.reverse(), separators.reverse());
    }

    parseCompIter() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Async:
            case TokenKind.Py_For:
                return this.parseCompFor();
            case TokenKind.Py_If:
                return this.parseCompIf();
            default:
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'async', 'for' or 'if' keyword!", this.curSymbol);
        }
    }

    parseCompSyncCompFor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_For) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseExprList();
            if (this.curSymbol.getKind() === TokenKind.Py_In) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseOrTest();
                if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For, TokenKind.Py_If]) {
                    const next = this.parseCompIter();
                    return new ASTSyncCompForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, next);
                }
                else {
                    return new ASTSyncCompForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, new ASTNode());
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'in' in for comprehension expression!", this.curSymbol);
        }
        return new ASTNode();
    }

    parseCompFor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseCompSyncCompFor();
            return new ASTCompForNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        return this.parseCompSyncCompFor();
    }

    parseCompIf() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_If) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTestNoCond();
            if (this.curSymbol.getKind() in [ TokenKind.Py_Async, TokenKind.Py_For, TokenKind.Py_If]) {
                const next = this.parseCompIter();
                return new ASTCompIfNode(startPos, this.curSymbol.getStartPosition(), op1, right, next);
            }
            return new ASTCompIfNode(startPos, this.curSymbol.getStartPosition(), op1, right, new ASTNode());
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'if' in if comprehension expression!", this.curSymbol);
    }

    parseYieldExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
            const op1 = this.curSymbol;
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_SemiColon:
                case TokenKind.Newline:
                    return new ASTYieldNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode());
                case TokenKind.Py_From: {
                    const op2 = this.curSymbol;
                    this.advance();
                    const right = this.parseTest();
                    return new ASTYieldFromNode(startPos, this.curSymbol.getStartPosition(), op1, op2, right);
                }
                default: {
                    const right = this.parseTestListComp();
                    return new ASTYieldNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'yield' in yield expression!", this.curSymbol);
    }

    parseArgList() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes : ASTNode[] = [];
        const separators : Token[] = [];
        nodes.push( this.parseSubscript() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
            nodes.push( this.parseSubscript() );
        }
        return new ASTArgListNode(startPos, this.curSymbol.getStartPosition(),nodes.reverse(), separators.reverse());
    }

    parseArgument() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Mul:
            case TokenKind.Py_Power: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.parseTest();
                return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), new ASTNode(), op1, right);
            }
            default: {
                const left = this.parseTest();
                switch (this.curSymbol.getKind()) {
                    case TokenKind.Py_Async:
                    case TokenKind.Py_For: {
                        const right = this.parseCompFor();
                        return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), right);
                    }
                    case TokenKind.Py_Assign:
                    case TokenKind.Py_ColonAssign: {
                        const op1 = this.curSymbol;
                        this.advance();
                        const right = this.parseTest();
                        return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
                    }
                    default:
                        return new ASTArgumentNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
                }
            }
        }
    }

    parseCompoundStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Async:
                return this.parseAsyncStmt();
            case TokenKind.Py_Matrice:
                return this.parseDecoratedStmt();
            case TokenKind.Py_If:
                return this.parseIfStmt();
            case TokenKind.Py_While:
                return this.parseWhileStmt();
            case TokenKind.Py_For:
                return this.parseForStmt();
            case TokenKind.Py_Try:
                return this.parseTryStmt();
            case TokenKind.Py_With:
                return this.parseWithStmt();
            case TokenKind.Py_Class:
                return this.parseClassStmt();
            case TokenKind.Py_Def:
                return this.parseFuncDefStmt();
            default:
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting compound statement!", this.curSymbol);
        }
    }

    parseClassStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Class) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Name) {
                const op2 = this.curSymbol;
                this.advance();
                let op3 = new Token(-1, -1, TokenKind.Empty, []);
                let op4 = new Token(-1, -1, TokenKind.Empty, []);
                let left = new ASTNode();
                if (this.curSymbol.getKind() === TokenKind.Py_LeftParen) {
                    op3 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() != TokenKind.Py_RightParen) left = this.parseArgList();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        op4 = this.curSymbol;
                        this.advance();
                    }
                    else {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' in class declaration!", this.curSymbol);
                    }
                }
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    const op5 = this.curSymbol;
                    this.advance();
                    const right = this.parseSuiteStmt();
                    return new ASTClassNode(startPos, this.curSymbol.getStartPosition(), op1, op2, op3, left, op4, op5, right);
                }
                else {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in class declaration!", this.curSymbol);
                } 
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'class' in class declaration!", this.curSymbol);
    }

    parseAsyncStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_Def: {
                    const right = this.parseFuncDefStmt();
                    return new ASTAsyncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
                case TokenKind.Py_With: {
                    const right = this.parseWithStmt();
                    return new ASTAsyncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
                case TokenKind.Py_For: {
                    const right = this.parseForStmt();
                    return new ASTAsyncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
                }
                default:
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'def', 'with' or 'for' after 'async' statement!", this.curSymbol);
            } 
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'async' statement!", this.curSymbol);
    }

    parseIfStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const elifNodes: ASTNode[] = [];
        let elseNode = new ASTNode();
        if (this.curSymbol.getKind() === TokenKind.Py_If) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseNamedExpr();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseSuiteStmt();
                while (this.curSymbol.getKind() === TokenKind.Py_Elif) {
                    const op3 = this.curSymbol;
                    this.advance();
                    const one = this.parseNamedExpr();
                    if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                        const op4 = this.curSymbol;
                        this.advance();
                        const two = this.parseSuiteStmt();
                        elifNodes.push( new ASTElifNode(startPos, this.curSymbol.getStartPosition(), op3, one, op4, two) );
                    }
                    else {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'elif' statement!", this.curSymbol);
                    }
                }
                if (this.curSymbol.getKind() === TokenKind.Py_Else) {
                    elseNode = this.parseElseStmt();
                }
                return new ASTIfNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, elifNodes.reverse(), elseNode);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'if' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'if' statement!", this.curSymbol);
    }

    parseElseStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Else) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseSuiteStmt();
                return new ASTElseNode(startPos, this.curSymbol.getStartPosition(), op1, op2, right);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'else' statement!", this.curSymbol);
    }

    parseWhileStmt() : ASTNode {
        return new ASTNode();
    }

    parseForStmt() : ASTNode {
        return new ASTNode();
    }

    parseTryStmt() : ASTNode {
        return new ASTNode();
    }

    parseWithStmt() : ASTNode {
        return new ASTNode();
    }

    parseWithItemStmt() : ASTNode {
        return new ASTNode();
    }

    parseExceptStmt() : ASTNode {
        return new ASTNode();
    }

    parseSuiteStmt() : ASTNode {
        return new ASTNode();
    }

    parseStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Matrice:
            case TokenKind.Py_Async:
            case TokenKind.Py_Class:
            case TokenKind.Py_If:
            case TokenKind.Py_For:
            case TokenKind.Py_While:
            case TokenKind.Py_Try:
            case TokenKind.Py_With:
            case TokenKind.Py_Def:
                return this.parseCompoundStmt();
            default:
                return this.parseSimpleStmt();
        }
    }

    parseSimpleStmt() : ASTNode {
        return new ASTNode();
    }

    parseSmallStmt() : ASTNode {
        return new ASTNode();
    }

    parseExprStmt() : ASTNode {
        return new ASTNode();
    }

    parseAnnAssignStmt() : ASTNode {
        return new ASTNode();
    }

    parseTestListStarExprStmt() : ASTNode {
        return new ASTNode();
    }

    parseDelStmt() : ASTNode {
        return new ASTNode();
    }

    parsePassStmt() : ASTNode {
        return new ASTNode();
    }

    parseFlowStmt() : ASTNode {
        return new ASTNode();
    }

    parseBreakStmt() : ASTNode {
        return new ASTNode();
    }

    parseContinueStmt() : ASTNode {
        return new ASTNode();
    }

    parseReturnStmt() : ASTNode {
        return new ASTNode();
    }

    parseYieldStmt() : ASTNode {
        return new ASTNode();
    }

    parseRaiseStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportFromStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportAsNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseDottedAsNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseImportAsNamesStmt() : ASTNode {
        return new ASTNode();
    }

    parseDottedAsNamesStmt() : ASTNode {
        return new ASTNode();
    }

    parseDottedNameStmt() : ASTNode {
        return new ASTNode();
    }

    parseGlobalStmt() : ASTNode {
        return new ASTNode();
    }

    parseNonlocalStmt() : ASTNode {
        return new ASTNode();
    }

    parseAssertStmt() : ASTNode {
        return new ASTNode();
    }

    parseSingleInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseFileInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseEvalInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseAsyncFuncDefStmt() : ASTNode {
        return new ASTNode();
    }

    parseDecoratedStmt() : ASTNode {
        return new ASTNode();
    }

    parseDecoratorsStmt() : ASTNode {
        return new ASTNode();
    }

    parseDecoratorStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncDefStmt() : ASTNode {
        return new ASTNode();
    }

    parseParametersStmt() : ASTNode {
        return new ASTNode();
    }

    parseTypedArgsListStmt() : ASTNode {
        return new ASTNode();
    }

    parseTFPStmt() : ASTNode {
        return new ASTNode();
    }

    parseVarArgsListStmt() : ASTNode {
        return new ASTNode();
    }

    parseVFPDefStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncBodySuiteStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncTypeInputStmt() : ASTNode {
        return new ASTNode();
    }

    parseFuncTypeStmt() : ASTNode {
        return new ASTNode();
    }

    parseTypeListStmt() : ASTNode {
        return new ASTNode();
    }
}