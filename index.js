
// generate random number and store it in array
var randomSequenceArr = [];
console.log($('.btn').length);
let maxSize =  $('.btn').length;
for(var i = 0; i < maxSize; i++){
    let randomNumer = Math.floor(Math.random()*maxSize+1);
    randomSequenceArr.push(randomNumer);
}
console.log(randomSequenceArr);

function initialBrickGlow(){
    randomSequenceArr.forEach((e,index) => {
        console.log(e);
        // add box shadow
        setTimeout(function(){
            $('.btn' + e).addClass('button' + e);

            // removing boxshadow
            setTimeout(function(){
            $('.btn' + e).removeClass('button' + e);
            },300)

        }, 350*(index+1))
        
        
    });
}
// initialBrickGlow();

setTimeout(function() {
    initialBrickGlow();
}, 3000);


// generate user clicked button index value
$('.btn').click(function(){
    var userSequence =  $(this).attr("index");
    console.log(userSequence);
    checkIndex(userSequence);
})

// check the sequence
function checkIndex(userSequence){
    if(userSequence == randomSequenceArr[0]){
        console.log('green');
            randomSequenceArr.shift();
            console.log(randomSequenceArr);

            if(randomSequenceArr.length == 0){
                $('.main').css('backgroundColor','#34a434');
                $('.btn').fadeOut();
                $('.icon').text('🥳');
                $('.win-lose').text('Hurray! You Won.')
                $('.resultBoard').css('display','flex');
                console.log("Winner!");
            }
        
    }
    else{
        $('.main').css('backgroundColor','#ef0f0f');
        $('.btn').fadeOut();
        $('.icon').text('😟');
        $('.win-lose').text('Hmm! You Lost.');
        $('.Next').css('display','none');
        $('.resultBoard').css('display','flex');
        console.log('red');
        console.log("Loser!");

    }
}

// restart button
$('.restart').click(function(){
    location.reload();
})
