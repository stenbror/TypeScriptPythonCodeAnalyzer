
// PythonCoreParser
// Written by Richard Magnor Stenbro. stenbror@hotmail.com
// Implements Python grammar 3.9 in Typescript for code analyzing purposes of Python code.
// Copyright (C) 2021 By Richard Magnor Stenbro. Free to use for any non profit purposes.

import { Token, TokenKind, StringLiteral, NameLiteral, NumberLiteral } from "./Token";
import PythonCoreTokenizer from "./PythonCoreTokenizer";

import { ASTNode } from "./ast/ASTNode";
import { ASTAtomNameNode } from "./ast/ASTAtomNameLiteralNode";
import { ASTAtomNoneNode } from "./ast/ASTAtomNoneNode";
import { ASTAtomFalseNode } from "./ast/ASTAtomFalseNode";
import { ASTAtomTrueNode } from "./ast/ASTAtomTrueNode";
import { ASTAtomElipsisNode } from "./ast/ASTAtomElipsisNode";
import { ASTAtomNumberNode } from "./ast/ASTAtomNumberLiteralNode";
import { ASTAtomStringNode } from "./ast/ASTAtomStringLiteralNode";
import { ASTAtomTupleLiteralNode } from "./ast/ASTAtomTupleLiteralNode";
import { ASTAtomListLiteralNode } from "./ast/ASTAtomListLiteralNode";
import { ASTAtomDictionaryLiteralNode } from "./ast/ASTAtomDictionaryLiteralNode";
import { ASTAtomSetLiteralNode } from "./ast/ASTAtomSetLiteralNode";
import { ASTAtomExprNode } from "./ast/ASTAtomExprNode";
import { ASTPowerExprNode } from "./ast/ASTPowerExprNode";
import { ASTUnaryPlusNode } from "./ast/ASTUnaryPlusNode";
import { ASTUnaryMinusNode } from "./ast/ASTUnaryMinusNode";
import { ASTUnaryBitInvertNode } from "./ast/ASTUnaryBitInvertNode";
import { ASTMulExprNode } from "./ast/ASTMulExprNode";
import { ASTDivExprNode } from "./ast/ASTDivExprNode";
import { ASTModuloExprNode } from "./ast/ASTModuloExprNode";
import { ASTMatriceExprNode } from "./ast/ASTMatriceExprNode";
import { ASTFloorDivExprNode } from "./ast/ASTFloorDivExprNode";
import { ASTPlusExprNode } from "./ast/ASTPlusExprNode";
import { ASTMinusExprNode } from "./ast/ASTMinusExprNode";
import { ASTShiftLeftExprNode } from "./ast/ASTShiftLeftExprNode";
import { ASTShiftRightExprNode } from "./ast/ASTShiftRightExprNode";
import { ASTBitAndExprNode } from "./ast/ASTBitAndExprNode";
import { ASTBitXorExprNode } from "./ast/ASTBitXorExprNode";
import { ASTBitOrExprNode } from "./ast/ASTBitOrExprNode";
import { ASTStarExprNode } from "./ast/ASTStarExprNode";
import { ASTLessExprNode } from "./ast/ASTLessExprNode";
import { ASTLessEqualExprNode } from "./ast/ASTLessEqualExprNode";
import { ASTGreaterExprNode } from "./ast/ASTGreaterExprNode";
import { ASTGreaterEqualExprNode } from "./ast/ASTGreaterEqualExprNode";
import { ASTEqualExprNode } from "./ast/ASTEqualExprNode";
import { ASTNotEqualExprNode } from "./ast/ASTNotEqualExprNode";
import { ASTInExprNode } from "./ast/ASTInExprNode";
import { ASTNotInExprNode } from "./ast/ASTNotInExprNode";
import { ASTIsExprNode } from "./ast/ASTIsExprNode";
import { ASTIsNotExprNode } from "./ast/ASTIsNotExprNode";
import { ASTNotTestNode } from "./ast/ASTNotTestNode";
import { ASTOrTestNode } from "./ast/ASTOrTestNode";
import { ASTAndTestNode } from "./ast/ASTAndTestNode";
import { ASTLambdaExprNode } from "./ast/ASTLambdaExprNode";
import { ASTTestNode } from "./ast/ASTTestNode";
import { ASTNamedExprNode } from "./ast/ASTNamedExprNode";
import { ASTTestListCompNode } from "./ast/ASTTestListCompNode";
import { ASTDotNameNode } from "./ast/ASTDotNameNode";
import { ASTCallNode } from "./ast/ASTCallNode";
import { ASTIndexNode } from "./ast/ASTIndexNode";
import { ASTSubscriptListNode } from "./ast/ASTSubscriptListNode";
import { ASTSubscriptNode } from "./ast/ASTSubscriptNode";
import { ASTExprListNode } from "./ast/ASTExprListNode";
import { ASTTestListNode } from "./ast/ASTTestListNode";
import { ASTCompForNode } from "./ast/ASTCompForNode";
import { ASTSyncCompForNode } from "./ast/ASTSyncCompForNode";
import { ASTCompIfNode } from "./ast/ASTCompIfNode";
import { ASTYieldFromNode } from "./ast/ASTYieldFromNode";
import { ASTYieldNode } from "./ast/ASTYieldNode";
import { ASTArgListNode } from "./ast/ASTArgListNode";
import { ASTArgumentNode } from "./ast/ASTArgumentNode";
import { ASTDictionaryContainerNode } from "./ast/ASTDictionaryContainerNode";
import { ASTSetContainerNode } from "./ast/ASTSetContainerNode";
import { ASTSetNameNode } from "./ast/ASTSetNameNode";
import { ASTDictionaryNameNode } from "./ast/ASTDictionaryNameNode";
import { ASTAsyncNode } from "./ast/ASTAsyncNode";
import { ASTClassNode } from "./ast/ASTClassNode";
import { ASTIfNode } from "./ast/ASTIfNode";
import { ASTElifNode } from "./ast/ASTElifNode";
import { ASTElseNode } from "./ast/ASTElseNode";
import { ASTWhileNode } from "./ast/ASTWhileNode";
import { ASTForNode } from "./ast/ASTForNode";
import { ASTTryNode } from "./ast/ASTTryNode";
import { ASTWithNode } from "./ast/ASTWithNode";
import { ASTWithItemNode } from "./ast/ASTWithItemNode";
import { ASTExceptNode } from "./ast/ASTExceptNode";
import { ASTSuiteNode } from "./ast/ASTSuiteNode";
import { ASTSimpleStmtNode } from "./ast/ASTSimpleStmtNode";
import { ASTExprPlusAssignNode } from "./ast/ASTExprPlusAssignNode";
import { ASTExprMinusAssignNode } from "./ast/ASTExprMinusAssignNode";
import { ASTExprMulAssignNode } from "./ast/ASTExprMulAssignNode";
import { ASTExprDivAssignNode } from "./ast/ASTExprDivAssignNode";
import { ASTExprMatriceAssignNode } from "./ast/ASTExprMatriceAssignNode";
import { ASTExprModuloAssignNode } from "./ast/ASTExprModuloAssignNode";
import { ASTExprFloorDivAssignNode } from "./ast/ASTExprFloorDivAssignNode";
import { ASTExprPowerAssignNode } from "./ast/ASTExprPowerAssignNode";
import { ASTExprBitAndAssignNode } from "./ast/ASTExprBitAndAssignNode";
import { ASTExprBitOrAssignNode } from "./ast/ASTExprBitOrAssignNode";
import { ASTExprBitXorAssignNode } from "./ast/ASTExprBitXorAssignNode";
import { ASTExprBitShiftLeftAssignNode } from "./ast/ASTExprBitShiftLeftAssignNode";
import { ASTExprBitShiftRightAssignNode } from "./ast/ASTExprBitShiftRightAssignNode";
import { ASTAnnAssignNode } from "./ast/ASTAnnAssignNode";
import { ASTAnnotatedNode } from "./ast/ASTAnnotatedNode";
import { ASTAssignNode } from "./ast/ASTAssignNode";
import { ASTTestListStarExprNode } from "./ast/ASTTestListStarExprNode";
import { ASTDelNode } from "./ast/ASTDelNode";
import { ASTPassNode } from "./ast/ASTPassNode";
import { ASTBreakNode } from "./ast/ASTBreakNode";
import { ASTContinueNode } from "./ast/ASTContinueNode";
import { ASTReturnNode } from "./ast/ASTReturnNode";
import { ASTRaiseNode } from "./ast/ASTRaiseNode";
import { ASTGlobalNode } from "./ast/ASTGlobalNode";
import { ASTNonlocalNode } from "./ast/ASTNonlocalNode";
import { ASTAssertNode } from "./ast/ASTAssertNode";
import { ASTImportNameNode } from "./ast/ASTImportNameNode";
import { ASTDottedNameNode } from "./ast/ASTDottedNameNode";
import { ASTDottedAsNameNode } from "./ast/ASTDottedAsNameNode";
import { ASTDottedAsNamesNode } from "./ast/ASTDottedAsNamesNode";
import { ASTImportAsNameNode } from "./ast/ASTImportAsNameNode";
import { ASTImportAsNamesNode } from "./ast/ASTImportAsNamesNode";
import { ASTImportFromNode } from "./ast/ASTImportFromNode";
import { ASTDecoratedNode } from "./ast/ASTDecoratedNode";
import { ASTDecoratorsNode } from "./ast/ASTDecoratorsNode";
import { ASTDecoratorNode } from "./ast/ASTDecoratorNode";
import { ASTAsyncFuncNode } from "./ast/ASTAsyncFuncNode";
import { ASTSingleInputNode } from "./ast/ASTSingleInputNode";
import { ASTFileInputNode } from "./ast/ASTFileInputNode";
import { ASTEvalInputNode } from "./ast/ASTEvalInputNode";
import { ASTTypeInputNode } from "./ast/ASTTypeInputNode";
import { ASTFuncTypeNode } from "./ast/ASTFuncTypeNode";
import { ASTTypeListNode } from "./ast/ASTTypeListNode";
import { ASTFuncBodySuiteNode } from "./ast/ASTFuncBodySuiteNode";
import { ASTVFPDefNode } from "./ast/ASTVFPDefNode";
import { ASTTFPDefNode } from "./ast/ASTTFPDefNode";
import { ASTFuncDefNode } from "./ast/ASTFuncDefNode";
import { ASTParameterNode } from "./ast/ASTParameterNode";
import { ASTVFPAssignNode } from "./ast/ASTVFPAssignNode";
import { ASTTFPAssignNode } from "./ast/ASTTFPAssignNode";
import { ASTVarArgsListNode } from "./ast/ASTVarArgsListNode";
import { ASTTypedArgsListNode } from "./ast/ASTTypedArgsListNode";

export class SyntaxErrorException extends Error {
    constructor(private Position: number, private text: string, private ErrorToken: Token) {
        super(text);
        Object.setPrototypeOf(this, SyntaxErrorException.prototype);
    }
}

class PythonCoreParser {
    private curSymbol: Token;
    private flowLevel: number;
    private lexer: PythonCoreTokenizer;

    constructor(lexer: PythonCoreTokenizer) {
        this.flowLevel = 0;
        this.lexer = lexer;
        this.curSymbol = this.lexer.advance();
    }

    private advance() : void {
        this.curSymbol = this.lexer.advance();
    }

    public parseAtom() : ASTNode {
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
                return new ASTAtomNameNode(startPos, this.curSymbol.getStartPosition(), <NameLiteral>op1);
            case TokenKind.Number:
                this.advance();
                return new ASTAtomNumberNode(startPos, this.curSymbol.getStartPosition(), <NumberLiteral>op1);
            case TokenKind.String: {
                const nodes : StringLiteral[] = [];
                nodes.push(<StringLiteral>this.curSymbol);
                console.log(`${(<StringLiteral>this.curSymbol).getContent()}`);
                this.advance();
                while (this.curSymbol.getKind() === TokenKind.String) {
                    nodes.push(<StringLiteral>this.curSymbol);
                    console.log(`${(<StringLiteral>this.curSymbol).getContent()}`);
                    this.advance();
                }
                return new ASTAtomStringNode(startPos, this.curSymbol.getStartPosition(), nodes);
            }
            case TokenKind.Py_LeftParen: {
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                    const op2 = this.curSymbol;
                    this.advance();
                    return new ASTAtomTupleLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                    const right = this.parseYieldExpr();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTAtomTupleLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
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
                        return new ASTAtomTupleLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
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
                    return new ASTAtomListLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = this.parseTestListComp();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightBracket) {
                        const op2 = this.curSymbol;
                        this.advance();
                        return new ASTAtomListLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
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
                    return new ASTAtomDictionaryLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
                }
                else {
                    const right = this.parseDictorSetMaker();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightCurly) {
                        const op2 = this.curSymbol;
                        this.advance();
                        if (typeof(right) === typeof(ASTDictionaryContainerNode)) {
                            return new ASTAtomDictionaryLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
                        }
                        return new ASTAtomSetLiteralNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
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

    public parseAtomExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseAtom();
            const nodes : ASTNode[] = [];
            while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
                nodes.push( this.parseTrailer() );
            }
            return new ASTAtomExprNode(startPos, this.curSymbol.getStartPosition(), op1, left, nodes);
        }
        console.log(`Fuck: ${this.curSymbol.getKind()}`);
        const left = this.parseAtom();
        
        const nodes : ASTNode[] = [];
        if (this.curSymbol.getKind() === TokenKind.Py_Dot || this.curSymbol.getKind() === TokenKind.Py_LeftParen || this.curSymbol.getKind() === TokenKind.Py_LeftBracket) {
            console.log(`${this.curSymbol.getKind()}`);
            while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_LeftParen, TokenKind.Py_LeftBracket ]) {
                nodes.push( this.parseTrailer() );
            }
        }
        return new ASTAtomExprNode(startPos, this.curSymbol.getStartPosition(), new Token(-1, -1, TokenKind.Empty, []), left, nodes);
    }

    public parsePower() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseAtomExpr();
        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            return new ASTPowerExprNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    public parseFactor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const op1 = this.curSymbol;
        switch (op1.getKind()) {
            case TokenKind.Py_Plus: {
                const right = this.parseFactor();
                return new ASTUnaryPlusNode(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_Minus: {
                const right = this.parseFactor();
                return new ASTUnaryMinusNode(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            case TokenKind.Py_BitInvert: {
                const right = this.parseFactor();
                return new ASTUnaryBitInvertNode(startPos, this.curSymbol.getStartPosition(), op1, right);
            }
            default:
                return this.parsePower();
        }
    }

    public parseTerm() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseFactor();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Mul, TokenKind.Py_Div, TokenKind.Py_FloorDiv, TokenKind.Py_Modulo, TokenKind.Py_Matrice ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFactor();
            switch (op1.getKind()) {
                case TokenKind.Py_Mul: 
                    res = new ASTMulExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Div: 
                    res = new ASTDivExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_FloorDiv: 
                    res = new ASTFloorDivExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Modulo: 
                    res = new ASTModuloExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Matrice: 
                    res = new ASTMatriceExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    public parseArith() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseTerm();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Plus, TokenKind.Py_Minus ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTerm();
            switch (op1.getKind()) {
                case TokenKind.Py_Plus: 
                    res = new ASTPlusExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_Minus: 
                    res = new ASTMinusExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    public parseShiftExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseArith();
        while (this.curSymbol.getKind() in [ TokenKind.Py_ShiftLeft, TokenKind.Py_ShiftRight ]) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseArith();
            switch (op1.getKind()) {
                case TokenKind.Py_ShiftLeft: 
                    res = new ASTShiftLeftExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                case TokenKind.Py_ShiftRight: 
                    res = new ASTShiftRightExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
            }
        }
        return res;
    }

    public parseAndExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseShiftExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitAnd) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseShiftExpr();
            res = new ASTBitAndExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    public parseXorExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseAndExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitXor) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseAndExpr();
            res = new ASTBitXorExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    public parseOrExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseXorExpr();
        while (this.curSymbol.getKind() === TokenKind.Py_BitOr) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseXorExpr();
            res = new ASTBitOrExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    public parseStarExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrExpr();
            return new ASTStarExprNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(startPos, "Missing '*' in star expression!", this.curSymbol);
    }

    public parseComparisonExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseOrExpr();
        while (this.curSymbol.getKind() in [ TokenKind.Py_Less, TokenKind.Py_LessEqual, TokenKind.Py_Equal, TokenKind.Py_GreaterEqual, TokenKind.Py_Greater, TokenKind.Py_NotEqual, TokenKind.Py_Is, TokenKind.Py_In, TokenKind.Py_Not ]) {
            const op1 = this.curSymbol;
            this.advance();
            switch (op1.getKind()) {
                case TokenKind.Py_Less: {
                    const right = this.parseOrExpr();
                    res = new ASTLessExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_LessEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTLessEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Equal: {
                    const right = this.parseOrExpr();
                    res = new ASTEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_GreaterEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Greater: {
                    const right = this.parseOrExpr();
                    res = new ASTGreaterExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_NotEqual: {
                    const right = this.parseOrExpr();
                    res = new ASTNotEqualExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_In: {
                    const right = this.parseOrExpr();
                    res = new ASTInExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    break;
                }
                case TokenKind.Py_Is: {
                    if (this.curSymbol.getKind() === TokenKind.Py_Not) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTIsNotExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
                    }
                    else {
                        const right = this.parseOrExpr();
                        res = new ASTIsExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
                    }
                    break;
                }
                case TokenKind.Py_Not: {
                    if (this.curSymbol.getKind() === TokenKind.Py_In) {
                        const op2 = this.curSymbol;
                        this.advance();
                        const right = this.parseOrExpr();
                        res = new ASTNotInExprNode(startPos, this.curSymbol.getStartPosition(), res, op1, op2, right);
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

    public parseNotTest() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Not) {
            const startPos = this.curSymbol.getStartPosition();
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseNotTest();
            return new ASTNotTestNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        return this.parseComparisonExpr();
    }

    public parseAndTest() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseNotTest();
        while (this.curSymbol.getKind() === TokenKind.Py_And) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseNotTest();
            res = new ASTAndTestNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    public parseOrTest() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        let res = this.parseAndTest();
        while (this.curSymbol.getKind() === TokenKind.Py_Or) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseAndTest();
            res = new ASTOrTestNode(startPos, this.curSymbol.getStartPosition(), res, op1, right);
        }
        return res;
    }

    public parseLambdaExpr(isCond: boolean) : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            let left = new ASTNode();
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                left = this.parseVarArgsListStmt();
            }
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                throw new SyntaxErrorException(startPos, "Missing ':' in 'lambda' expression!", this.curSymbol);
            }
            const op2 = this.curSymbol;
            this.advance();
            if (isCond) {
                const right = this.parseTest();
                return new ASTLambdaExprNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }
            else {
                const right = this.parseTestNoCond();
                return new ASTLambdaExprNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }

        }
        throw new SyntaxErrorException(startPos, "Missing 'lambda' keyword in 'lambda' expression!", this.curSymbol);
    }

    public parseTestNoCond() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Lambda) {
            return this.parseLambdaExpr(false);
        }
        return this.parseOrTest();
    }

    public parseTest() : ASTNode {
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
            return new ASTTestNode(startPos, this.curSymbol.getStartPosition(), left, op1, right, op2, next);
        }
        return left;
    }

    public parseNamedExpr() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_ColonAssign) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTNamedExprNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    public parseTestListComp() : ASTNode {
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
        return new ASTTestListCompNode(startPos, this.curSymbol.getStartPosition(), nodes, commas);
    }

    public parseTrailer() : ASTNode {
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
                return new ASTDotNameNode(startPos, this.curSymbol.getStartPosition(), op1, op2);
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

    public parseSubscriptList() : ASTNode {
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
        return new ASTSubscriptListNode(startPos, this.curSymbol.getStartPosition(), nodes, separators);
    }

    public parseSubscript() : ASTNode {
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

    public parseExprList() : ASTNode {
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
        return new ASTExprListNode(startPos, this.curSymbol.getStartPosition(), nodes, separators);
    }

    public parseTestList() : ASTNode {
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
        return new ASTTestListNode(startPos, this.curSymbol.getStartPosition(), nodes, separators);
    }

    public parseDictorSetMaker() : ASTNode {
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
            return new ASTDictionaryContainerNode(startPos, this.curSymbol.getStartPosition(), keys, colons, values, separators);
        }
        return new ASTSetContainerNode(startPos, this.curSymbol.getStartPosition(), keys, separators);
    }

    public parseCompIter() : ASTNode {
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

    public parseCompSyncCompFor() : ASTNode {
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

    public parseCompFor() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseCompSyncCompFor();
            return new ASTCompForNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        return this.parseCompSyncCompFor();
    }

    public parseCompIf() : ASTNode {
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

    public parseYieldExpr() : ASTNode {
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

    public parseArgList() : ASTNode {
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
        return new ASTArgListNode(startPos, this.curSymbol.getStartPosition(),nodes, separators);
    }

    public parseArgument() : ASTNode {
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

    public parseCompoundStmt() : ASTNode {
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

    public parseClassStmt() : ASTNode {
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

    public parseAsyncStmt() : ASTNode {
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

    public parseIfStmt() : ASTNode {
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
                return new ASTIfNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, elifNodes, elseNode);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'if' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'if' statement!", this.curSymbol);
    }

    public parseElseStmt() : ASTNode {
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
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'else' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'else' statement!", this.curSymbol);
    }

    public parseWhileStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_While) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseNamedExpr();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseSuiteStmt();
                if (this.curSymbol.getKind() === TokenKind.Py_Else) {
                    const next = this.parseElseStmt();
                    return new ASTWhileNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, next);
                }
                return new ASTWhileNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, new ASTNode());
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'while' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'while' in while statement!", this.curSymbol);
    }

    public parseForStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_For) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseExprList();
            if (this.curSymbol.getKind() === TokenKind.Py_In) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseTestList();
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    const op3 = this.curSymbol;
                    this.advance();
                    let tc = new Token(-1, -1, TokenKind.Empty, []);
                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                        tc = this.curSymbol;
                        this.advance();
                    }
                    const next = this.parseSuiteStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_Else) {
                        const elsePart = this.parseElseStmt();
                        return new ASTForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, op3, tc, next, elsePart);
                    }
                    return new ASTForNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, op3, tc, next, new ASTNode());
                }
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'for' statement!", this.curSymbol);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'in' in 'for' statement!", this.curSymbol);
        }
        return new ASTNode();
    }

    public parseTryStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Try) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const left = this.parseSuiteStmt();
                if (this.curSymbol.getKind() === TokenKind.Py_Finally) {
                    const op3 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                        const op4 = this.curSymbol;
                        this.advance();
                        const right = this.parseSuiteStmt();
                        return new ASTTryNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, [], new ASTNode(), op3, op4, right);
                    }
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'finally' statement!", this.curSymbol);
                }
                else {
                    const nodes: ASTNode[] = [];
                    nodes.push( this.parseExceptStmt() );
                    while (this.curSymbol.getKind() === TokenKind.Py_Except) {
                        nodes.push( this.parseExceptStmt() );
                    }
                    let elsePart = new ASTNode();
                    if (this.curSymbol.getKind() === TokenKind.Py_Else) elsePart = this.parseElseStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_Finally) {
                        const op3 = this.curSymbol;
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                            const op4 = this.curSymbol;
                            this.advance();
                            const right = this.parseSuiteStmt();
                            return new ASTTryNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, nodes, elsePart, op3, op4, right);
                        }
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'finally' statement!", this.curSymbol);
                    }
                    return new ASTTryNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, nodes, elsePart, new Token(-1, -1, TokenKind.Empty, []), new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'try' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'try' statement!", this.curSymbol);
    }

    public parseWithStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_With) {
            const op1 = this.curSymbol;
            this.advance();
            const nodes: ASTNode[] = [];
            const separatrors: Token[] = [];
            nodes.push( this.parseWithItemStmt() );
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separatrors.push( this.curSymbol );
                this.advance();
                nodes.push( this.parseWithItemStmt() );
            }
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                    const op3 = this.curSymbol;
                    this.advance();
                    const right = this.parseSuiteStmt();
                    return new ASTWithNode(startPos, this.curSymbol.getStartPosition(), op1, nodes, separatrors, op2, op3, right);
                }
                else {
                    const right = this.parseSuiteStmt();
                    return new ASTWithNode(startPos, this.curSymbol.getStartPosition(), op1, nodes, separatrors, op2, new Token(-1, -1, TokenKind.Empty, []), right);
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'with' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'with' statement!", this.curSymbol);
    }

    public parseWithItemStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTest();
        if (this.curSymbol.getKind() === TokenKind.Py_As) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseOrExpr();
            return new ASTWithItemNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return new ASTWithItemNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
    }

    public parseExceptStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Except) {
            const op1 = this.curSymbol;
            this.advance();
            let left = new ASTNode();
            let op2 = new Token(-1, -1, TokenKind.Empty, []);
            let op3 = new Token(-1, -1, TokenKind.Empty, []);
            if (this.curSymbol.getKind() != TokenKind.Py_Colon) {
                left = this.parseTest();
                if (this.curSymbol.getKind() === TokenKind.Py_As) {
                    op2 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() === TokenKind.Name) {
                        op3 = this.curSymbol;
                        this.advance();
                    }
                    else {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME literal after 'as' in except statement!", this.curSymbol);
                    }
                }
            } 
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op4 = this.curSymbol;
                this.advance;
                const suite = this.parseSuiteStmt();
                return new ASTExceptNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, op3, op4, suite);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in 'except' statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'except' statement!", this.curSymbol);
    }

    public parseSuiteStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Newline) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Indent) {
                const op2 = this.curSymbol;
                this.advance();
                const nodes: ASTNode[] = [];
                nodes.push( this.parseStmt() );
                while (this.curSymbol.getKind() != TokenKind.Dedent) {
                    nodes.push( this.parseStmt() );
                }
                const op3 = this.curSymbol;
                this.advance();
                return new ASTSuiteNode(startPos, this.curSymbol.getStartPosition(), op1, op2, nodes, op3);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting indentation before block statement!", this.curSymbol);
        }
        return this.parseSimpleStmt();
    }

    public parseStmt() : ASTNode {
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

    public parseSimpleStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        nodes.push( this.parseSmallStmt() );
        while (this.curSymbol.getKind() === TokenKind.Py_SemiColon) {
            separators.push( this.curSymbol );
            this.advance();
            nodes.push( this.parseSmallStmt() );
        }
        if (this.curSymbol.getKind() !== TokenKind.Newline) throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting <NEWLINE> after simple statement(s)!", this.curSymbol);
        const op1 = this.curSymbol;
        this.advance();
        return new ASTSimpleStmtNode(startPos, this.curSymbol.getEndPosition(), nodes, separators, op1);
    }

    public parseSmallStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Del:
                return this.parseDelStmt();
            case TokenKind.Py_Pass:
                return this.parsePassStmt();
            case TokenKind.Py_Break:
            case TokenKind.Py_Continue:
            case TokenKind.Py_Return:
            case TokenKind.Py_Raise:
            case TokenKind.Py_Yield:
                return this.parseFlowStmt();
            case TokenKind.Py_Import:
            case TokenKind.Py_From:
                return this.parseImportStmt();
            case TokenKind.Py_Global:
                return this.parseGlobalStmt();
            case TokenKind.Py_Nonlocal:
                return this.parseNonlocalStmt();
            case TokenKind.Py_Assert:
                return this.parseAssertStmt();
            default:
                return this.parseExprStmt();
        }
    }

    public parseExprStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTestListStarExprStmt();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_PlusAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprPlusAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_MinusAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprMinusAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_MulAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprMulAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_DivAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprDivAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_MatriceAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprMatriceAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_ModuloAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprModuloAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_PowerAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprPowerAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_FloorDivAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprFloorDivAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_BitAndAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitAndAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_BitOrAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitOrAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_BitXorAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitXorAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_ShiftLeftAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitShiftLeftAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_ShiftRightAssign: {
                const op1 = this.curSymbol;
                this.advance();
                const right = this.curSymbol.getKind() === TokenKind.Py_Yield ? this.parseYieldExpr() : this.parseTestList();
                return new ASTExprBitShiftRightAssignNode(startPos, this.curSymbol.getEndPosition(), left, op1, right);
            }
            case TokenKind.Py_Colon: {
                const right = this.parseAnnAssignStmt();
                if (this.curSymbol.getKind() === TokenKind.Py_Assign) {
                    const op1 = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                        const next = this.parseYieldExpr();
                        return new ASTAnnAssignNode(startPos, this.curSymbol.getStartPosition(), left, right, op1, next);
                    }
                    else {
                        const next = this.parseTestListStarExprStmt();
                        return new ASTAnnAssignNode(startPos, this.curSymbol.getStartPosition(), left, right, op1, next);
                    }
                }
                return new ASTAnnAssignNode(startPos, this.curSymbol.getStartPosition(), left, right, new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1));
            }
            case TokenKind.Py_Assign:
                {
                    const operators: Token[] = [];
                    const nodes: ASTNode[] = [];
                    while (this.curSymbol.getKind() === TokenKind.Py_Assign) {
                        operators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Yield) {
                            nodes.push( this.parseYieldExpr() );
                        }
                        else {
                            nodes.push( this.parseTestListStarExprStmt() );
                        }
                    }
                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                        const tc = this.curSymbol;
                        this.advance();
                        return new ASTAssignNode(startPos, this.curSymbol.getStartPosition(), left, operators, nodes, tc);
                    }
                    return new ASTAssignNode(startPos, this.curSymbol.getStartPosition(), left, operators, nodes, new Token(-1, -1, TokenKind.Empty, []));
                }
            default:
                return left;
        }
    }

    public parseAnnAssignStmt() : ASTNode {
        if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
            const startPos = this.curSymbol.getStartPosition();
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTAnnotatedNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in annotated statement!", this.curSymbol);
    }

    public parseTestListStarExprStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        nodes.push( this.curSymbol.getKind() === TokenKind.Py_Mul ? this.parseStarExpr() : this.parseTest() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Newline:
                case TokenKind.Py_SemiColon:
                case TokenKind.Py_PlusAssign:
                case TokenKind.Py_MinusAssign:
                case TokenKind.Py_MulAssign:
                case TokenKind.Py_DivAssign:
                case TokenKind.Py_ModuloAssign:
                case TokenKind.Py_MatriceAssign:
                case TokenKind.Py_FloorDivAssign:
                case TokenKind.Py_BitAndAssign:
                case TokenKind.Py_BitOrAssign:
                case TokenKind.Py_BitXorAssign:
                case TokenKind.Py_ShiftLeftAssign:
                case TokenKind.Py_ShiftRightAssign:
                case TokenKind.Py_Colon:
                case TokenKind.Py_Assign:
                    break;
                case TokenKind.Py_Comma:
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting element before ',' in testlist statement!", this.curSymbol);
                default:
                    nodes.push( this.curSymbol.getKind() === TokenKind.Py_Mul ? this.parseStarExpr() : this.parseTest() );
                    break;
            }
        }
        return new ASTTestListStarExprNode(startPos, this.curSymbol.getStartPosition(), nodes, separators);
    }

    public parseDelStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Del) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseExprList();
            return new ASTDelNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'del' in del statement!", this.curSymbol);
    }

    public parsePassStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Pass) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTPassNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'pass' in pass statement!", this.curSymbol);
    }

    public parseFlowStmt() : ASTNode {
        if (this.flowLevel > 0) {
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_Break:
                    return this.parseBreakStmt();
                case TokenKind.Py_Continue:
                    return this.parseContinueStmt();
                case TokenKind.Py_Return:
                    return this.parseReturnStmt();
                case TokenKind.Py_Raise:
                    return this.parseRaiseStmt();
                case TokenKind.Py_Yield:
                    return this.parseYieldExpr();
                default:
                    break;
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting flow statement inside looping or function statement!", this.curSymbol);
    }

    public parseBreakStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Break) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTBreakNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'break' in break statement!", this.curSymbol);
    }

    public parseContinueStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Continue) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTContinueNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'continue' in continue statement!", this.curSymbol);
    }

    public parseReturnStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Return) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() in [ TokenKind.Newline, TokenKind.Py_SemiColon ]) {
                return new ASTReturnNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(-1, -1));
            }
            const right = this.parseTestListStarExprStmt();
            return new ASTReturnNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'return' in return statement!", this.curSymbol);
    }

    public parseYieldStmt() : ASTNode {
        return this.parseYieldExpr();
    }

    public parseRaiseStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Raise) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() in [ TokenKind.Newline, TokenKind.Py_SemiColon ]) {
                return new ASTRaiseNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(-1, -1), new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1) );
            }
            const left = this.parseTest();
            if (this.curSymbol.getKind() === TokenKind.Py_From) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseTest();
                return new ASTRaiseNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right );
            }
            return new ASTRaiseNode(startPos, this.curSymbol.getStartPosition(), op1, left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1) );
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'raise' in raise statement!", this.curSymbol);
    }

    public parseImportStmt() : ASTNode {
        switch (this.curSymbol.getKind()) {
            case TokenKind.Py_Import:
                return this.parseImportNameStmt();
            case TokenKind.Py_From:
                return this.parseImportFromStmt();
            default:
                break;
        }
        return new ASTNode();
    }

    public parseImportNameStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Global) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseDottedAsNamesStmt();
            return new ASTImportNameNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'import' in import statement!", this.curSymbol);
    }

    public parseImportFromStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_From) {
            const op1 = this.curSymbol;
            this.advance();
            const dotsAndElipsis: Token[] = [];
            let left = new ASTNode();
            while (this.curSymbol.getKind() in [ TokenKind.Py_Dot, TokenKind.Py_Elipsis ]) {
                dotsAndElipsis.push( this.curSymbol );
                this.advance();
            }
            if (this.curSymbol.getKind() === TokenKind.Py_Import && dotsAndElipsis.length === 0) {
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '.' in from part of import statement!", this.curSymbol);
            }
            else if (this.curSymbol.getKind() !== TokenKind.Py_Import) {
                left = this.parseDottedNameStmt();
            }
            if (this.curSymbol.getKind() === TokenKind.Py_Import) {
                const op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_LeftParen) {
                    const op3 = this.curSymbol;
                    this.advance();
                    const right = this.parseImportAsNamesStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                        const op4 = this.curSymbol;
                        this.advance();
                        return new ASTImportFromNode(startPos, this.curSymbol.getStartPosition(), op1, left, dotsAndElipsis, op2, op3, right, op4);
                    }
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' in from import statement!", this.curSymbol);
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                    const op3 = this.curSymbol;
                    this.advance();
                    return new ASTImportFromNode(startPos, this.curSymbol.getStartPosition(), op1, left, dotsAndElipsis, op2, op3, new ASTNode(), new Token(-1, -1, TokenKind.Empty, []));
                }
                else {
                    const right = this.parseImportAsNamesStmt();
                    return new ASTImportFromNode(startPos, this.curSymbol.getStartPosition(), op1, left, dotsAndElipsis, op2, new Token(-1, -1, TokenKind.Empty, []), right, new Token(-1, -1, TokenKind.Empty, []));
                }
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'import' in from import statement!", this.curSymbol);
            
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'from' in import statement!", this.curSymbol);
    }

    public parseImportAsNameStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Name) {
            const left = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_As) {
                const op1 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Name) {
                    const right = this.curSymbol;
                    this.advance();
                    return new ASTImportAsNameNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
                }
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME literal in import statement!", this.curSymbol);
            }
            return new ASTImportAsNameNode(startPos, this.curSymbol.getStartPosition(), left, new Token(-1, -1, TokenKind.Empty, []), new Token(-1, -1, TokenKind.Empty, []));
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME literal in import statement!", this.curSymbol);
    }

    public parseDottedAsNameStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseDottedNameStmt();
        if (this.curSymbol.getKind() === TokenKind.Py_As) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Name) {
                const right = this.curSymbol;
                this.advance();
                return new ASTDottedAsNameNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
            } 
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal in dotted as name statement!", this.curSymbol);
        }
        return left;
    }

    public parseImportAsNamesStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        nodes.push( this.parseImportAsNameStmt() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            if (this.curSymbol.getKind() in [ TokenKind.Py_SemiColon, TokenKind.Newline ]) break;
            nodes.push( this.parseImportAsNameStmt() );
        } 
        return new ASTImportAsNamesNode(startPos, this.curSymbol.getStartPosition(), nodes, separators);
    }

    public parseDottedAsNamesStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        nodes.push( this.parseDottedAsNameStmt() );
        while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
            separators.push( this.curSymbol );
            this.advance();
            nodes.push( this.parseDottedAsNameStmt() );
        } 
        return new ASTDottedAsNamesNode(startPos, this.curSymbol.getStartPosition(), nodes, separators);
    }

    public parseDottedNameStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: Token[] = [];
        const dots: Token[] = [];
        if (this.curSymbol.getKind() === TokenKind.Name) {
            nodes.push( this.curSymbol );
            this.advance();
            while (this.curSymbol.getKind() === TokenKind.Py_Dot) {
                dots.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() !== TokenKind.Name) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal in dotted name statement!", this.curSymbol);
                }
                nodes.push( this.curSymbol );
                this.advance();
            }
            return new ASTDottedNameNode(startPos, this.curSymbol.getStartPosition(), nodes, dots);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal in dotted name statement!", this.curSymbol);
    }

    public parseGlobalStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Global) {
            const op1 = this.curSymbol;
            this.advance();
            const nodes: Token[] = [];
            const separators: Token[] = [];
            if (this.curSymbol.getKind() !== TokenKind.Name) {
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal in global statement!", this.curSymbol);
            }
            nodes.push( this.curSymbol );
            this.advance();
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() !== TokenKind.Name) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal after ',' in global statement!", this.curSymbol);
                }
                nodes.push( this.curSymbol );
                this.advance();
            }
            return new ASTGlobalNode(startPos, this.curSymbol.getStartPosition(), op1, nodes, separators);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'global' in global statement!", this.curSymbol);
    }

    public parseNonlocalStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Nonlocal) {
            const op1 = this.curSymbol;
            this.advance();
            const nodes: Token[] = [];
            const separators: Token[] = [];
            if (this.curSymbol.getKind() !== TokenKind.Name) {
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal in nonlocal statement!", this.curSymbol);
            }
            nodes.push( this.curSymbol );
            this.advance();
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() !== TokenKind.Name) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME Literal after ',' in nonlocal statement!", this.curSymbol);
                }
                nodes.push( this.curSymbol );
                this.advance();
            }
            return new ASTNonlocalNode(startPos, this.curSymbol.getStartPosition(), op1, nodes, separators);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'nonlocal' in nonlocal statement!", this.curSymbol);
    }

    public parseAssertStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Assert) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseTest();
            if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseTest();
                return new ASTAssertNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right);
            }
            return new ASTAssertNode(startPos, this.curSymbol.getStartPosition(), op1, left, new Token(-1, -1, TokenKind.Empty, []), new ASTNode(-1, -1));
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'assert' in assert statement!", this.curSymbol);
    }

    public parseSingleInputStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        switch (this.curSymbol.getKind()) {
            case TokenKind.Newline:
                return new ASTSingleInputNode(startPos, this.curSymbol.getStartPosition(), new ASTNode(), this.curSymbol);
            case TokenKind.Py_If:
            case TokenKind.Py_For:
            case TokenKind.Py_While:
            case TokenKind.Py_With:
            case TokenKind.Py_Try:
            case TokenKind.Py_Def:
            case TokenKind.Py_Class:
            case TokenKind.Py_Async:
            case TokenKind.Py_Matrice:
            {
                const right = this.parseCompoundStmt();
                if (this.curSymbol.getKind() === TokenKind.Newline) {
                    return new ASTSingleInputNode(startPos, this.curSymbol.getStartPosition(), right, this.curSymbol);
                }
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NEWLINE after compound statement!", this.curSymbol);
            }
            default:
                return this.parseSimpleStmt();
        }
    }

    public parseFileInputStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const newlines: Token[] = [];
        console.log(`=> ${this.curSymbol.getKind()}`);
        while (this.curSymbol.getKind() !== TokenKind.EOF) {
            if (this.curSymbol.getKind() === TokenKind.Newline) {
                newlines.push( this.curSymbol );
                this.advance();
            }
            else {
                nodes.push( this.parseStmt() );
            }
        }
        return new ASTFileInputNode(startPos, this.curSymbol.getStartPosition(), nodes, newlines, this.curSymbol);
    }

    public parseEvalInputStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const newlines: Token[] = [];
        const right = this.parseTestList();
        while (this.curSymbol.getKind() === TokenKind.Newline) {
            newlines.push( this.curSymbol );
            this.advance();
        }
        if (this.curSymbol.getKind() === TokenKind.EOF) {
            return new ASTEvalInputNode(startPos, this.curSymbol.getStartPosition(), right, newlines, this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting EOF after statement!", this.curSymbol);
    }

    public parseAsyncFuncDefStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Async) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseFuncDefStmt();
            return new ASTAsyncFuncNode(startPos, this.curSymbol.getStartPosition(), op1, right);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'async' in async def statement!", this.curSymbol);
    }

    public parseDecoratedStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Matrice) {
            const left = this.parseDecoratorsStmt();
            switch (this.curSymbol.getKind()) {
                case TokenKind.Py_Def: {
                    const right = this.parseFuncDefStmt();
                    return new ASTDecoratedNode(startPos, this.curSymbol.getStartPosition(), left, right);
                }
                case TokenKind.Py_Async: {
                    const right = this.parseAsyncFuncDefStmt();
                    return new ASTDecoratedNode(startPos, this.curSymbol.getStartPosition(), left, right);
                }
                case TokenKind.Py_Class: {
                    const right = this.parseClassStmt();
                    return new ASTDecoratedNode(startPos, this.curSymbol.getStartPosition(), left, right);
                }
                default:
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'def', 'async' or 'class' in decorated statement!", this.curSymbol);
            }
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '@' in decorated statement!", this.curSymbol);
    }

    public parseDecoratorsStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        if (this.curSymbol.getKind() === TokenKind.Py_Matrice) {
            while (this.curSymbol.getKind() === TokenKind.Py_Matrice) {
                nodes.push( this.parseDecoratorStmt() );
            }
            return new ASTDecoratorsNode(startPos, this.curSymbol.getStartPosition(), nodes);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '@' in decorated statement!", this.curSymbol);
    }

    public parseDecoratorStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Matrice) {
            const op1 = this.curSymbol;
            this.advance();
            const left = this.parseDottedNameStmt();
            let op2 = new Token(-1, -1, TokenKind.Empty, []);
            let op3 = new Token(-1, -1, TokenKind.Empty, []);
            let right = new ASTNode();
            if (this.curSymbol.getKind() === TokenKind.Py_LeftParen) {
                op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() !== TokenKind.Py_RightParen) {
                    right = this.parseArgList();
                }
                if (this.curSymbol.getKind() !== TokenKind.Py_RightParen) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' in decorated statement!", this.curSymbol);
                }
                op3 = this.curSymbol;
                this.advance();
            }
            if (this.curSymbol.getKind() === TokenKind.Newline) {
                const op4 = this.curSymbol;
                this.advance();
                return new ASTDecoratorNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, right, op3, op4);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting Newline in decorated statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '@' in decorated statement!", this.curSymbol);
    }

    public parseFuncDefStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_Def) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Name) {
                const op2 = this.curSymbol;
                this.advance();
                const left = this.parseParametersStmt();
                let op3 = new Token(-1, -1, TokenKind.Empty, []);
                let right = new ASTNode();
                if (this.curSymbol.getKind() === TokenKind.Py_Arrow) {
                    op3 = this.curSymbol;
                    this.advance();
                    right = this.parseTest();
                }
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                    const op4 = this.curSymbol;
                    this.advance();
                    let tc = new Token(-1, -1, TokenKind.Empty, []);
                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                        tc = this.curSymbol;
                        this.advance();
                    }
                    const next = this.parseFuncBodySuiteStmt();
                    return new ASTFuncDefNode(startPos, this.curSymbol.getStartPosition(), op1, op2, left, op3, right, op4, tc, next);
                }
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ':' in def statement!", this.curSymbol);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME in def statement!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting 'def' in def statement!", this.curSymbol);
    }

    public parseParametersStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_LeftParen) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                const op2 = this.curSymbol;
                this.advance();
                return new ASTParameterNode(startPos, this.curSymbol.getStartPosition(), op1, new ASTNode(), op2);
            }
            const right = this.parseTypeListStmt();
            if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                const op2 = this.curSymbol;
                this.advance();
                return new ASTParameterNode(startPos, this.curSymbol.getStartPosition(), op1, right, op2);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' in parameter!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '(' in parameter!", this.curSymbol);
    }

    public parseTFPAssignStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseTFPDefStmt();
        if (this.curSymbol.getKind() === TokenKind.Py_Assign) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTTFPAssignNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    public parseTypedArgsListStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        const tc: Token[] = [];
        let div = new Token(-1, -1, TokenKind.Empty, []);
        let mulNode = new ASTNode();
        let powerNode = new ASTNode();
        let mul = new Token(-1, -1, TokenKind.Empty, []);
        let power = new Token(-1, -1, TokenKind.Empty, []);
        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            power = this.curSymbol;
            this.advance;
            powerNode = this.parseTFPDefStmt();
            if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                    separators.push( this.curSymbol );
                    this.advance();
                }
                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                    tc.push( this.curSymbol );
                    this.advance();
                }
            }
        }
        else if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            mul = this.curSymbol;
            this.advance();
            mulNode = this.parseTFPDefStmt();
            if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                tc.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                }
            }
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                    tc.push( this.curSymbol );
                    this.advance();
                }
                if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
                else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                    power = this.curSymbol;
                    this.advance;
                    powerNode = this.parseTFPDefStmt();
                    if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                        if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                            separators.push( this.curSymbol );
                            this.advance();
                        }
                        if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                            tc.push( this.curSymbol );
                            this.advance();
                        }
                    }
                    if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                    }
                }
                else {
                    nodes.push( this.parseTFPAssignStmt() );
                }
            }
        }
        else {
            nodes.push( this.parseTFPAssignStmt() );
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                    tc.push( this.curSymbol );
                    this.advance();
                }
                if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
                else if (this.curSymbol.getKind() === TokenKind.Py_Div) {
                    div = this.curSymbol;
                    this.advance();
                    if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                        if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                            separators.push( this.curSymbol );
                            this.advance();
                        }
                        if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                            tc.push( this.curSymbol );
                            this.advance();
                        }
                    }
                    nodes.push( this.parseTFPAssignStmt() );
                    while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                        separators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                            tc.push( this.curSymbol );
                            this.advance();
                        }
                        if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
                        else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                            power = this.curSymbol;
                            this.advance;
                            powerNode = this.parseTFPDefStmt();
                            if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                                if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                                    separators.push( this.curSymbol );
                                    this.advance();
                                }
                                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                                    tc.push( this.curSymbol );
                                    this.advance();
                                }
                            }
                            if (this.curSymbol.getKind() !== TokenKind.Py_RightParen) {
                                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                            }
                        }
                        else if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                            mul = this.curSymbol;
                            this.advance();
                            mulNode = this.parseTFPDefStmt();
                            if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                                tc.push( this.curSymbol );
                                this.advance();
                                if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                                }
                            }
                            else {
                                while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                                    separators.push( this.curSymbol );
                                    this.advance();
                                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                                        tc.push( this.curSymbol );
                                        this.advance();
                                        if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
                                    }
                                    if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                                        power = this.curSymbol;
                                        this.advance;
                                        powerNode = this.parseTFPDefStmt();
                                        if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                                            if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                                                separators.push( this.curSymbol );
                                                this.advance();
                                            }
                                            if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                                                tc.push( this.curSymbol );
                                                this.advance();
                                            }
                                        }
                                        if (this.curSymbol.getKind() !== TokenKind.Py_RightParen) {
                                            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                                        }
                                    }
                                    else {
                                        nodes.push( this.parseTFPAssignStmt() );
                                    }
                                }
                            }
                        }
                    }
                } 
                else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                    power = this.curSymbol;
                    this.advance;
                    powerNode = this.parseTFPDefStmt();
                    if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                        if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                            separators.push( this.curSymbol );
                            this.advance();
                        }
                        if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                            tc.push( this.curSymbol );
                            this.advance();
                        }
                    }
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                    mul = this.curSymbol;
                    this.advance();
                    mulNode = this.parseTFPDefStmt();
                    if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                        tc.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                        }
                    }
                    while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                        separators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                            tc.push( this.curSymbol );
                            this.advance();
                        }
                        if (this.curSymbol.getKind() === TokenKind.Py_RightParen) break;
                        else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                            power = this.curSymbol;
                            this.advance;
                            powerNode = this.parseTFPDefStmt();
                            if (this.curSymbol.getKind() in [ TokenKind.Py_Comma, TokenKind.TypeComment ]) {
                                if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                                    separators.push( this.curSymbol );
                                    this.advance();
                                }
                                if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                                    tc.push( this.curSymbol );
                                    this.advance();
                                }
                            }
                            if (this.curSymbol.getKind() != TokenKind.Py_RightParen) {
                                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' after final typecomment!", this.curSymbol);
                            }
                        }
                        else {
                            nodes.push( this.parseTFPAssignStmt() );
                        }
                    }
                }
            }
        }
        
        return new ASTTypedArgsListNode(startPos, this.curSymbol.getStartPosition(), nodes, separators, div, mul, mulNode, power, powerNode, tc);
    }

    public parseTFPDefStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Name) {
            const op1 = this.curSymbol;
            this.advance();
            if (this.curSymbol.getKind() === TokenKind.Py_Colon) {
                const op2 = this.curSymbol;
                this.advance();
                const right = this.parseTest();
                return new ASTTFPDefNode(startPos, this.curSymbol.getStartPosition(), op1, op2, right);
            }
            return new ASTTFPDefNode(startPos, this.curSymbol.getStartPosition(), op1, new Token(-1, -1, TokenKind.Empty, []), new ASTNode());
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME as argument!", this.curSymbol);
    }

    public parseVarArgsListStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        let div = new Token(-1, -1, TokenKind.Empty, []);
        let slashSeen = false;
        let oneSeen = false;
        let mulNode = new ASTNode();
        let powerNode = new ASTNode();
        let mul = new Token(-1, -1, TokenKind.Empty, []);
        let power = new Token(-1, -1, TokenKind.Empty, []);
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            mul = this.curSymbol;
            this.advance();
            mulNode = this.parseVFPAssignStmt();
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) break;
                if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                    power = this.curSymbol;
                    this.advance();
                    powerNode = this.parseVFPAssignStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                        separators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Unexpected ',' after '**' expression!", this.curSymbol);
                        }
                    }
                }
                nodes.push( this.parseVFPAssignStmt() );
            }
        }
        else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            power = this.curSymbol;
            this.advance();
            powerNode = this.parseVFPAssignStmt();
            if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Unexpected ',' after '**' expression!", this.curSymbol);
                }
            }
        }
        else {
            nodes.push( this.parseVFPAssignStmt() );
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_Colon) break;
                if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                    mul = this.curSymbol;
                    this.advance();
                    mulNode = this.parseVFPAssignStmt();
                    while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                        separators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Colon) break;
                        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                            power = this.curSymbol;
                            this.advance();
                            powerNode = this.parseVFPAssignStmt();
                            if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Unexpected ',' after '**' expression!", this.curSymbol);
                            }
                            break;
                        }
                        nodes.push( this.parseVFPAssignStmt() );
                    }
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                    power = this.curSymbol;
                    this.advance();
                    powerNode = this.parseVFPAssignStmt();
                    if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                        separators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Unexpected ',' after '**' expression!", this.curSymbol);
                        }
                    }
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Div && !slashSeen && oneSeen) {
                    div = this.curSymbol;
                    this.advance();
                    slashSeen = true;
                }
                else {
                    if (this.curSymbol.getKind() === TokenKind.Py_Colon) break;
                    nodes.push( this.parseVFPAssignStmt() );
                    oneSeen = true;
                }
            }
        }
        return new ASTVarArgsListNode(startPos, this.curSymbol.getStartPosition(), nodes, separators, div, mul, mulNode, power, powerNode);
    }

    public parseVFPAssignStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const left = this.parseVFPDefStmt();
        if (this.curSymbol.getKind() === TokenKind.Py_Assign) {
            const op1 = this.curSymbol;
            this.advance();
            const right = this.parseTest();
            return new ASTVFPAssignNode(startPos, this.curSymbol.getStartPosition(), left, op1, right);
        }
        return left;
    }

    public parseVFPDefStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Name) {
            const op1 = this.curSymbol;
            this.advance();
            return new ASTVFPDefNode(startPos, this.curSymbol.getStartPosition(), op1);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NAME as argument!", this.curSymbol);
    }

    public parseFuncBodySuiteStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Newline) {
            const op1 = this.curSymbol;
            this.advance();
            let tc = new Token(-1, -1, TokenKind.Empty, []);
            let nl = new Token(-1, -1, TokenKind.Empty, []);
            if (this.curSymbol.getKind() === TokenKind.TypeComment) {
                tc = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() !== TokenKind.Newline) {
                    throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting NEWLINE after type comment!", this.curSymbol);
                }
                nl = this.curSymbol;
                this.advance();
            }
            if (this.curSymbol.getKind() === TokenKind.Indent) {
                const op2 = this.curSymbol;
                this.advance();
                const nodes: ASTNode[] = [];
                nodes.push( this.parseStmt() );
                while (this.curSymbol.getKind() !== TokenKind.Dedent ) {
                    nodes.push( this.parseStmt() );
                }
                const op3 = this.curSymbol;
                this.advance();
                return new ASTFuncBodySuiteNode(startPos, this.curSymbol.getStartPosition(), op1, tc, nl, op2, nodes, op3);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting indentation in statement block!", this.curSymbol);
        }
        return this.parseSimpleStmt();
    }

    public parseFuncTypeInputStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const newlines: Token[] = [];
        const right = this.parseFuncTypeStmt();
        while (this.curSymbol.getKind() === TokenKind.Newline) {
            newlines.push( this.curSymbol );
            this.advance();
        }
        if (this.curSymbol.getKind() === TokenKind.EOF) {
            return new ASTTypeInputNode(startPos, this.curSymbol.getStartPosition(), right, newlines, this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting EOF after statement!", this.curSymbol);
    }

    public parseFuncTypeStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        if (this.curSymbol.getKind() === TokenKind.Py_LeftParen) {
            const op1 = this.curSymbol;
            let left = new ASTNode();
            this.advance();
            if (this.curSymbol.getKind() !== TokenKind.Py_RightParen) {
                left = this.parseTypeListStmt();
            }
            if (this.curSymbol.getKind() === TokenKind.Py_RightParen) {
                const op2 = this.curSymbol;
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_Arrow) {
                    const op3 = this.curSymbol;
                    this.advance();
                    const right = this.parseTest();
                    return new ASTFuncTypeNode(startPos, this.curSymbol.getStartPosition(), op1, left, op2, op3, right);
                }
                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '->' in type expression!", this.curSymbol);
            }
            throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting ')' in type expression!", this.curSymbol);
        }
        throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Expecting '(' in type expression!", this.curSymbol);
    }

    public parseTypeListStmt() : ASTNode {
        const startPos = this.curSymbol.getStartPosition();
        const nodes: ASTNode[] = [];
        const separators: Token[] = [];
        let mulNode = new ASTNode();
        let powerNode = new ASTNode();
        let mul = new Token(-1, -1, TokenKind.Empty, []);
        let power = new Token(-1, -1, TokenKind.Empty, []);
        if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
            mul = this.curSymbol;
            this.advance();
            mulNode = this.parseTest();
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                    power = this.curSymbol;
                    this.advance();
                    powerNode = this.parseTest();
                    break;
                }
                nodes.push( this.parseTest() );
            }
        }
        else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
            power = this.curSymbol;
            this.advance();
            powerNode = this.parseTest();
        }
        else {
            nodes.push( this.parseTest() );
            while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                separators.push( this.curSymbol );
                this.advance();
                if (this.curSymbol.getKind() === TokenKind.Py_Mul) {
                    mul = this.curSymbol;
                    this.advance();
                    mulNode = this.parseTest();
                    while (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                        separators.push( this.curSymbol );
                        this.advance();
                        if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                            power = this.curSymbol;
                            this.advance();
                            powerNode = this.parseTest();
                            if (this.curSymbol.getKind() === TokenKind.Py_Comma) {
                                throw new SyntaxErrorException(this.curSymbol.getStartPosition(), "Unexpected ',' after '**' expression!", this.curSymbol);
                            }
                            break;
                        }
                        nodes.push( this.parseTest() );
                    }
                }
                else if (this.curSymbol.getKind() === TokenKind.Py_Power) {
                    power = this.curSymbol;
                    this.advance();
                    powerNode = this.parseTest();
                }
                else {
                    nodes.push( this.parseTest() );
                }
            }
        }
        return new ASTTypeListNode(startPos, this.curSymbol.getStartPosition(), nodes, separators, mul, mulNode, power, powerNode);
    }
}

export default PythonCoreParser;
