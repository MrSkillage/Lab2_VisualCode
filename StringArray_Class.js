"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.tasks = [];
    }
    //Lab 2 (b)
    toDoClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log(task + " has been added to the array.");
        return this.tasks.length;
        ;
    };
    //Lab 2 (c)
    toDoClass.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    //Lab 2 (d)
    toDoClass.prototype.deleteTask = function (task) {
        var key = this.tasks.indexOf(task, 0);
        if (key > -1) {
            this.tasks.splice(key, 1);
        }
        else {
            console.log("Item not found" + task);
        }
        console.log("item: " + task + " is deleted.");
        return this.tasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("Complete_Homework");
testClass.addTask("Study_Exam");
testClass.addTask("Read_C++_Book");
testClass.addTask("Return_Library_Book");
testClass.listAllTasks();
testClass.deleteTask("Read_C++_Book");
testClass.listAllTasks();
