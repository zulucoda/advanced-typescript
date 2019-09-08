import { UniversityLibrarian } from './classes'

declare module './classes' {
    interface UniversityLibrarian {
        phone: string;
        hostSeminar(topic: string):void;
    }
}

UniversityLibrarian.prototype.hostSeminar = function (topic) {
    console.log(`Hosting a seminar on ${topic}`);
};