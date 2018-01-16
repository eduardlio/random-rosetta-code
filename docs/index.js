$(document).ready(function(){
    var tasks = [];
    var currentTask;
    var max;
    $.get('output.json', function(data){
        data.tasks.forEach((task, i)=>{
            tasks.push(task);
        });
        max = tasks.length;
        console.log(max);
        setRandomTask();
    });
    $(".next").on("click", ()=>{
        setRandomTask();
    })
    function setRandomTask(){
        var random = Math.floor(Math.random()*max);
        currentTask = tasks[random].title;
        $("#task").html(currentTask);
        $(".sure").attr("href", tasks[random].link);
    }
})
