//randomize children
$.fn.randomize = function() {
  this.each(function(){
      let childrenArray = $(this).children().toArray();
      let shuffledChildrenArray = fisherYatesShuffle(childrenArray);
      $(shuffledChildrenArray).detach().appendTo(this);
  });

  return this;
  
  function fisherYatesShuffle(array){
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  }
}

$('.drab-slab').randomize();

// var x = 0;
// var intervalID = setInterval(function () {
//     $('.drab-slab').randomize();

//     if (++x === 1) {
//         window.clearInterval(intervalID);
//     }
// }, 200);

$( ".drab-slab" ).on( "click", function() {
    // window.clearInterval(intervalID);

    // var x = 0;
    // var intervalID = setInterval(function () {
    //     $('.drab-slab').randomize();
        
    //     if (++x === 2) {
    //         window.clearInterval(intervalID);
    //     }
    // }, 200);

    $('.drab-slab').randomize();
    
});