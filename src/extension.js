"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const vscode = require("vscode");

/** @type {typeof import('./docSymbolProvider')} */
const documentSymbolProvider = require("./docSymbolProvider.js");

/** @type {typeof import('./foldingRangeProvider')} */
const foldingRangeProvider = require("./foldingRangeProvider.js");

const fileGlobPattern = '**/*.git{attributes,config,modules}'
const targetLanguage = 'gitconfig'

/** @type vscode.DocumentSelector */
const selector = [
    { language: targetLanguage, pattern: fileGlobPattern },
    { language: targetLanguage, scheme: 'untitled'       },
]

function activate(context) {
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(
        selector, 
        new documentSymbolProvider.GitConfigDocumentSymbolProvider())
    );

    context.subscriptions.push(vscode.languages.registerFoldingRangeProvider(
        selector, 
        new foldingRangeProvider.GitConfigFoldingRangeProvider())
    );
}

exports.activate = activate;

function deactivate() { }

exports.deactivate = deactivate;

//# sourceMappingURL=extension.js.map