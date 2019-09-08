"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
require("./LibrarianExtension");
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
/*
    String Liter Types & Type Aliases
 */
var empCategory = "Manager"; // can be one or the other
var empCategory2 = "Non-Manager";
//=========================================================================
/*
 Polymorphic this Type

 Method chaining
 */
var LibraryBook = /** @class */ (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.Checkout = function () {
        console.log('Checking out a book.');
        return this;
    };
    LibraryBook.prototype.Checkin = function () {
        // console.log('Checking in a book.');
        if (this instanceof ChildrensBook) {
            console.log('Checking in a ChildrensBook.');
        }
        if (this instanceof ElectronicBook) {
            console.log('Checking in a ElectronicBook.');
        }
        return this;
    };
    return LibraryBook;
}());
var ChildrensBook = /** @class */ (function (_super) {
    __extends(ChildrensBook, _super);
    function ChildrensBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrensBook.prototype.Clean = function () {
        console.log('Cleaning a book');
        return this;
    };
    return ChildrensBook;
}(LibraryBook));
var ElectronicBook = /** @class */ (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicBook.prototype.RemoveFromCustomerDevice = function () {
        console.log('Removing book from device.');
        return this;
    };
    return ElectronicBook;
}(LibraryBook));
var kidBook = new ChildrensBook();
kidBook.Checkin().Clean().Checkout();
var eBook = new ElectronicBook();
eBook.Checkin().RemoveFromCustomerDevice().Checkout();
//=========================================================================
/*
    Declaration merging
    merging to interfaces

    module orgementation
 */
// const mergedBook: Book = book1;
// mergedBook.
{
    var newLibrarian_1 = new classes_1.UniversityLibrarian();
    newLibrarian_1.phone = '555-6789';
    newLibrarian_1.hostSeminar('British Literature');
}
function isVehicle(v) {
    return v.numberOfWheels !== undefined;
}
{
    var car = {
        numberOfWheels: 4
    };
    console.log("is vehicle: " + isVehicle(car));
}
function isBook(text) {
    return text.author !== undefined;
}
{
    var readingMaterial_1 = util.GetAllBooks()[0];
    if (isBook(readingMaterial_1)) {
        console.log("The book's author is " + readingMaterial_1.author);
    }
    else {
        // console.log(`The magazine's publisher is ${readingMaterial.publisher}`);
    }
}
//=========================================================================
/*
    Decorators
    What are decorators?
    - Declarative programming
    - Implemented as functions
    - May be attached to the following:
        - Classes
        - Methods
        - Accessors
        - Properties
        - Parameters
 */
{
    var lib1 = new classes_1.UniversityLibrarianSealed();
}
//=========================================================================
//# sourceMappingURL=app.js.map