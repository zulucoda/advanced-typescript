"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log('Employee added to schedule');
    };
    Employee.prototype.logTitle = function () {
        console.log("Employee has the title " + this.title);
    };
    return Employee;
}());
exports.Employee = Employee;
var Reseacher = /** @class */ (function () {
    function Reseacher() {
    }
    Reseacher.prototype.doResearch = function (topic) {
        console.log("Doing research on " + topic + ".");
    };
    return Reseacher;
}());
exports.Reseacher = Reseacher;
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    __decorate([
        decorators_1.writeable(true)
    ], UniversityLibrarian.prototype, "assistCustomer", null);
    UniversityLibrarian = __decorate([
        decorators_1.logger
    ], UniversityLibrarian);
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var UniversityLibrarianSealed = /** @class */ (function () {
    function UniversityLibrarianSealed() {
    }
    UniversityLibrarianSealed.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    __decorate([
        decorators_1.writeable(false)
    ], UniversityLibrarianSealed.prototype, "assistCustomer", null);
    UniversityLibrarianSealed = __decorate([
        decorators_1.sealed('UniversityLibrarianSealed'),
        decorators_1.logger
    ], UniversityLibrarianSealed);
    return UniversityLibrarianSealed;
}());
exports.UniversityLibrarianSealed = UniversityLibrarianSealed;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
        console.log("Department: " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map