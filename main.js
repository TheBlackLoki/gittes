//Aggiungere la classe test a tutti questi selettori


//  Creare il titolo di un paragrafo e un bottone 
// che permette di espandere il testo inizialmente nascosto


// Rendere visibile la scritta “Live Coding” dentro il cerchio arancione 
// quando passo con il mouse sul cerchio.




 $( document ).ready(function() {

$(".todoitem").click(
   // funzione di callback sull'evento click
   function(){
      $(this).hide(1000,
         //funzione di callback di fine animazione
         function(){
            $("h1").text("Item cancellatoooo!!!").show(2000,
               function(){
                  setTimeout(function(){
                     $("h1").hide(2000);
                  }, 2000);
               } 
               );
         }
         );
});


//    $(".faq").click(function(){
//       //if(clickato === false){
//          $(this).children("p").toggle(1000);
//       //    clickato = true;
//       // } else {
//       //    $("p").hide(500);
//       //    clickato = false;
//       // }
//    }
//   );


// $(".mybutton").click(function(){
//    $("#sipario").slideToggle(2500, function(){
//       alert("animazione finita");
//    });
// });


//    $("#cerchio").mouseenter(
//       function(){
//          $("#cerchio p").show(15000);
//       }
//    );

   //var clickato = false;


  

// var miobut = $(".mybutton");

// miobut.mouseenter(function() {
//    $('h1').addClass("addred");
// });

// miobut.mouseleave(function() {
//    $('h1').removeClass("addred");
// });

// miobut.dblclick(function() {
//    miobut.text("cliccato");
// });

// //Tutti gli h1
// $('h1').addClass('test');

// //l'Id prova
// $("#prova").addClass('test');

// //Tutti i li con classe active
// $("li.active").addClass('test');


// //tutti gli strong dentro un p con classe big
// $("p.big strong").addClass('test');

// //Tutti gli small figli (solo figli) di una section
// $("section > small").addClass('test');

// //agli h3 e h4
// $("h3, h4").addClass('test');

});