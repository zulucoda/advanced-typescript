import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
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
