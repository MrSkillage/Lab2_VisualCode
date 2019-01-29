//Lab 2 (a)
let tasks : Array<string> = []; 

//Lab 2 (b)
function addTask(task:string):number{
    tasks.push(task);
    console.log(task + " has been added to the array.");
    return tasks.length;;
}

//Lab 2 (c)
function listAllTasks(){
    tasks.forEach(function(task){
        console.log(task);
    })
}

//Lab 2 (d)
function deleteTask(task:string):number{
    let key:number = tasks.indexOf(task,0);
    if(key > -1){
        tasks.splice(key,1);
    } else {console.log("Item not found"+task);}
    console.log("item: " + task + " is deleted.");
    return task.length;
}

addTask("Clean_Room");
addTask("Make_Appointment");
addTask("Complete_Homework");
addTask("Go_To_Gym");

listAllTasks();

deleteTask("Complete_Homework");

listAllTasks();