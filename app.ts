import { Employee, ReferenceItem, Reseacher, UniversityLibrarian, UniversityLibrarianSealed } from "./classes";
import { Category } from "./enums";
import { Author, Book, Librarian, Logger, Magazine } from "./interfaces";
import * as util from "./lib/utilityFunctions";
import "./LibrarianExtension";

function PrintBookInfo({title: bookTitle, author: bookAuthor}: Book): void {
    console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

const [book1, book2] = util.GetAllBooks();
PrintBookInfo(book1);
PrintBookInfo(book2);

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}

// LogFavoriteBooks(util.GetAllBooks());

/*
  Tuple Type: Key, Value pair
 */
const tuple: [string, Book] = ["A 123.456", book1];

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

const tuple2: KeyValuePair<string, Book> = ["A 123.456", book1];
// ===============================================================================

/*
    Unions and Intersections
 */
const allBooks: Book[] = util.GetAllBooks();
const allMagazines: Magazine[] = util.GetAllMagazines();

const readingMaterial: Book | Magazine = allBooks[0];

function PrintTile(item: Book | Magazine): void {
    console.log(item.title);
}
PrintTile(allBooks[0]);
PrintTile(allMagazines[0]);

const serialNovel: Book & Magazine = {
    ...book1,
    ...allMagazines[0],
};

console.log(JSON.stringify(serialNovel, null, 2));

// =========================================================================

/*
    Mixins

 */

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtors) => {
       Object.getOwnPropertyNames(baseCtors.prototype).forEach((name) => {
           derivedCtor.prototype[name] = baseCtors.prototype[name];
       });
    });
}

applyMixins(UniversityLibrarian, [Employee, Reseacher]);

const newLibrarian = new UniversityLibrarian();

newLibrarian.doResearch("Alfa Romeo Cars");
// =========================================================================

/*
    String Liter Types & Type Aliases
 */

const empCategory: "Manager" | "Non-Manager" = "Manager"; // can be one or the other

type EmployeeCategory = "Manager" | "Non-Manager";

const empCategory2: EmployeeCategory = "Non-Manager";

// =========================================================================

/*
 Polymorphic this Type

 Method chaining
 */

class LibraryBook {
    public Checkout(): this {
        console.log("Checking out a book.");
        return this;
    }

    public Checkin(): this {
        // console.log('Checking in a book.');
        if (this instanceof ChildrensBook) {
            console.log("Checking in a ChildrensBook.");
        }

        if (this instanceof ElectronicBook) {
            console.log("Checking in a ElectronicBook.");
        }
        return this;
    }
}

class ChildrensBook extends LibraryBook {
    public Clean(): this {
        console.log("Cleaning a book");
        return this;
    }
}

class ElectronicBook extends LibraryBook {
    public RemoveFromCustomerDevice(): this {
        console.log("Removing book from device.");
        return this;
    }
}

const kidBook = new ChildrensBook();

kidBook.Checkin().Clean().Checkout();

const eBook = new ElectronicBook();
eBook.Checkin().RemoveFromCustomerDevice().Checkout();

// =========================================================================

/*
    Declaration merging
    merging to interfaces

    module orgementation
 */

// const mergedBook: Book = book1;
// mergedBook.
{
    const newLibrarian = new UniversityLibrarian();
    newLibrarian.phone = "555-6789";
    newLibrarian.hostSeminar("British Literature");
}

// =========================================================================

/*
  Type Guard

    typeof or instanceof
 */

interface Vehicle {
    numberOfWheels: number;
}

function isVehicle(v: any): v is Vehicle {
    return (v as Vehicle).numberOfWheels !== undefined;
}

{
    const car: Vehicle = {
        numberOfWheels: 4,
    };
    console.log(`is vehicle: ${isVehicle(car)}`);
}

function isBook(text: Book | Magazine): text is Book {
    return (text as Book).author !== undefined;
}

{
    const readingMaterial: Book | Magazine = util.GetAllBooks()[0];
    if (isBook(readingMaterial)) {
        console.log(`The book's author is ${readingMaterial.author}`);
    } else {
        // console.log(`The magazine's publisher is ${readingMaterial.publisher}`);
    }
}

// =========================================================================

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

// class decorators
{
    const lib1 = new UniversityLibrarianSealed();
    const lib2 = new UniversityLibrarian();
}

// property & methods decorator
{
    const lib1 = new UniversityLibrarianSealed();
    const lib2 = new UniversityLibrarian();

    try {
        lib1.assistCustomer = () => console.log("assistCustomer replacement method");
        lib2.assistCustomer = () => console.log("assistCustomer replacement method");
    } catch (e) {
        console.log(e.message);
    }
}

// =========================================================================
