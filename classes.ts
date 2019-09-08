import * as Interfaces from './interfaces';
import {sealed, logger, writeable} from './decorators'
class Employee {
    title: string;

    addToSchedule(): void {
        console.log('Employee added to schedule');
    }

    logTitle(): void {
        console.log(`Employee has the title ${this.title}`);
    }
}

class Reseacher {
    doResearch(topic: string): void {
        console.log(`Doing research on ${topic}.`);
    }
}

@logger
class UniversityLibrarian implements Interfaces.Librarian, Employee, Reseacher {
    
    name: string;
    email: string;
    department: string;

    @writeable(true)
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    // implementation of mixing function
    title: string;

    addToSchedule: () => void;

    doResearch: (topic: string) => void;

    logTitle: () => void;


}

@sealed('UniversityLibrarianSealed')
@logger
class UniversityLibrarianSealed implements Interfaces.Librarian, Employee, Reseacher {

    name: string;
    email: string;
    department: string;

    @writeable(false)
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    // implementation of mixing function
    title: string;

    addToSchedule: () => void;

    doResearch: (topic: string) => void;

    logTitle: () => void;


}

abstract class ReferenceItem {
    
    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }
    
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    
    abstract printCitation(): void;
}

export { UniversityLibrarian, UniversityLibrarianSealed, ReferenceItem, Employee, Reseacher };