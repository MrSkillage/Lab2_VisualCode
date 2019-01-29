import {toDoInterface} from './StringArray_Interface';

class toDoClass implements toDoInterface {

    tasks : Array<string> = []; 

//Lab 2 (b)
    addTask(task:string):number{
        this.tasks.push(task);
        console.log(task + " has been added to the array.");
        return this.tasks.length;;
}
    
//Lab 2 (c)
    listAllTasks():void{
    this.tasks.forEach(function(task){
        console.log(task);
    })
}

//Lab 2 (d)
    deleteTask(task:string):number{
    let key:number = this.tasks.indexOf(task,0);
    if(key > -1){
        this.tasks.splice(key,1);
    } else {console.log("Item not found"+task);}
    console.log("item: " + task + " is deleted.");
    return this.tasks.length;
}

}

let testClass = new toDoClass();
testClass.addTask("Complete_Homework");
testClass.addTask("Study_Exam");
testClass.addTask("Read_C++_Book");
testClass.addTask("Return_Library_Book");
testClass.listAllTasks();
testClass.deleteTask("Read_C++_Book");
testClass.listAllTasks();