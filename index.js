$(document).ready(function(){
    $.get('output.json', function(data){
        console.log(data.length);
    });
})