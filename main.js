$('.joke-cont').on("click" , function(){
$(".oke-cont").empty()
     loadJoke();

});
loadJoke();
function loadJoke(){
    $('.btn').html('Loading...')

$.ajax({
    url : "https://hindi-jokes-api.onrender.com/jokes?api_key=628bdf9ba78e165348e40f38ea2e",
    type : "GET",
    success : function(data){
        console.log(data);
        

    $(".oke-cont").append('<p class="joke">"'+data.jokeContent+'"</p> <div class="bottom"><button class="author" disabled>Author : "'+ data.created_by +'"</button></div>')
    console.log(data.jokeContent)
    },
 complete: function() {
    $('.spinner').hide().fadeOut();
    $('.btn').html('Next joke...')


    }
})

}
