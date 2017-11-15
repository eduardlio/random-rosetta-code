$(document).ready(function(){
    var tasks = [];
    var max;
    $.get('output.json', function(data){
        data.tasks.forEach((task, i)=>{
            tasks.push(task);
        });
    });
    max = tasks.length;
    $(".next").on("click", ()=>{
        setRandomTask();
    })
    function setRandomTask(){
        var random = Math.floor(Math.random()*max);
        $("#task").html(tasks[random].title);
        $(".sure").attr("href", tasks[random].link);
    }
})
