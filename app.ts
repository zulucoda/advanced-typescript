import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Reseacher,Employee } from './classes';
import * as util from './lib/utilityFunctions';

function PrintBookInfo({title: bookTitle, author: bookAuthor}: Book): void {
    console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

let [book1, book2] = util.GetAllBooks();
PrintBookInfo(book1);
PrintBookInfo(book2);


function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others)
}

// LogFavoriteBooks(util.GetAllBooks());

/*
  Tuple Type: Key, Value pair
 */
const tuple: [string, Book] = ['A 123.456', book1];

interface KeyValuePair<K, V> extends Array<K | V>{
    0: K;
    1: V;
}

const tuple2: KeyValuePair<string, Book> = ['A 123.456', book1];
//===============================================================================

/*
    Unions and Intersections
 */
const allBooks: Book[] = util.GetAllBooks();
const allMagazines: Magazine[] = util.GetAllMagazines();

const readingMaterial: Book | Magazine = allBooks[0];

function PrintTile(item: Book | Magazine):void {
    console.log(item.title);
}
PrintTile(allBooks[0]);
PrintTile(allMagazines[0]);

const serialNovel: Book & Magazine = {
    ...book1,
    ...allMagazines[0]
};

console.log(JSON.stringify(serialNovel, null, 2));

//=========================================================================

/*
    Mixins

 */

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtors => {
       Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
           derivedCtor.prototype[name] = baseCtors.prototype[name];
       });
    });
}

applyMixins(UniversityLibrarian, [Employee, Reseacher]);

const newLibrarian = new UniversityLibrarian();

newLibrarian.doResearch('Alfa Romeo Cars');
//=========================================================================

/*
    String Liter Types & Type Aliases
 */


const empCategory: 'Manager' | 'Non-Manager' = "Manager"; // can be one or the other

type EmployeeCategory = 'Manager' | 'Non-Manager';

const empCategory2: EmployeeCategory = "Non-Manager";

//=========================================================================