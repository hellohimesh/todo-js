var arr = [];
var tasklist = document.getElementById("taskList");
function addTask(task,date){
	arr.push("<span style='font-size:20px' class='text-primary'>Task = "+task+"</span> ;&nbsp; <span style='font-size:20px' class='text-primary'>Date = "+date+'</span>');
	display();
	console.log(arr);
	document.getElementById("task").value ='';
	document.getElementById("date").value = '';
}
function deleteTask(index){
	console.log(index);
	arr.splice(index, 1);
	display();
}
function display(){
	tasklist.innerHTML = "";
	for(var i =0 ; i< arr.length;i++){
		tasklist.innerHTML =tasklist.innerHTML + '<li class="list-group-item" style="backgroud-color:tomato;font-weight:bold;font-size:20px" >'+(i+1)+') '+arr[i]+'</li><span><button class="btn btn-danger" onclick="deleteTask('+i+')">Delete</button></span>';
	}
}