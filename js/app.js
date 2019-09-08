"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var util = require("./lib/utilityFunctions");
function PrintBookInfo(_a) {
    var bookTitle = _a.title, bookAuthor = _a.author;
    console.log(bookTitle + " was authored by " + bookAuthor);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
PrintBookInfo(book1);
PrintBookInfo(book2);
function LogFavoriteBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
// LogFavoriteBooks(util.GetAllBooks());
/*
  Tuple Type: Key, Value pair
 */
var tuple = ['A 123.456', book1];
var tuple2 = ['A 123.456', book1];
//===============================================================================
/*
    Unions and Intersections
 */
var allBooks = util.GetAllBooks();
var allMagazines = util.GetAllMagazines();
var readingMaterial = allBooks[0];
function PrintTile(item) {
    console.log(item.title);
}
PrintTile(allBooks[0]);
PrintTile(allMagazines[0]);
var serialNovel = __assign(__assign({}, book1), allMagazines[0]);
console.log(JSON.stringify(serialNovel, null, 2));
//=========================================================================
/*
    Mixins

 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtors) {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Reseacher]);
var newLibrarian = new classes_1.UniversityLibrarian();
newLibrarian.doResearch('Alfa Romeo Cars');
//=========================================================================
//# sourceMappingURL=app.js.map