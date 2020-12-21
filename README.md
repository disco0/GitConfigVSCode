# Git Config Language

This extension is a VS Code port of [this GitHub repository](https://github.com/lifted-studios/Gitconfig.tmLanguage).
I claim no rights nor ownership

## Features

Syntax highlighting and basic programmatic language features for `.gitconfig`, `.gitattributes`, and `.gitmodules` files.

Programmatic language features use implementation from [Ini for VSCode extension (`DavidWang.ini-for-vscode`)](https://github.com/DavidWang88/ini-for-vscode)

## Release Notes

See `CHANGELOG.md` for more in-depth notes.

### `2.0.1`

Support matching `;` for comments in addition to `#`.

## `2.0.0`

Added `config` to the list of supported extensions, changed plugin category to `Programming Languages`, and adjusted
`setting` regex to support single-letter names

### `1.0.1`

Cleanup related to comments, improved matching of section headers.

### `1.0.0`

Initial release.
