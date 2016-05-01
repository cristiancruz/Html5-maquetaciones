$(document).ready(function(){ 
    //Para lograr que barra de navegacion te siga despues de llegar a su alto
 
    //Permite aparecer y desaparecer el menu responsivo.
     $('.btn-menu').on('click',function(){
	   $('nav').toggleClass('mostrar');   
     }); 
     $('li').on('click',function(){
	   $('.menuMobile').removeClass('mostrar');
     }); 
    //Limite de duracion de notificaciones y arranque de notificacion inicial Crea tu ensalada.    
    alertify.set({ delay: 3000 });
    setTimeout(function() {$("#alert_inicial").fadeOut(1500);},5000);
    //llamado del metodo para crear imagenes seleccionables  Crea tu ensalada y validaciones.
    reset_img();
    // Validacion para limites de productos en ensaladas
    $('.btnSiguientevalid').click(function(){
    var select=$("select option:selected").val();
    if(select=='nada'){
         alertify.error("Ops..! Falta tamaño de porción.");
     }else{
     $('.nav-tabs > .active').next('li').find('a').trigger('click');  
     $('html, body').animate({scrollTop: '0px'}, 50);
     }
    });
    //Avanzar o retroceder mediante pasos de crea tu ensalada.
    $('.btnSiguiente').click(function(){
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 50); 
    });
    $('.btnAtras').click(function(){
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 50);//nos avienta al inicio de la pagina.
    });
    });
//Fin document ready
//Metodo para crear imagenes seleccionables  Crea tu ensalada y validaciones.
function reset_img(){
    //instancias de select , grupos de imagenes.
    $("#porciones").imagepicker({
    hide_select: true,
    show_label: true
    });
    $("#pollos_mariscos").imagepicker({
    hide_select: true,
    show_label: true,
         limit: 0
    });
    $("#barra_fria").imagepicker({
    hide_select: true,
    show_label: true,
    limit: 0
    });
    $("#aderezos").imagepicker({
    hide_select: true,
    show_label: true,
    limit: 0
    });
    $("#extras").imagepicker({
    hide_select: true,
    show_label: true,
    limit: 0
    });
    //validaciones y limites.
$("#porciones").imagepicker({
    hide_select: true,
    show_label: true,
    selected: function(option){
        var values = this.val();
       if(values=='chico'){
         $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 1  
     }); 
         $("#barra_fria").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 3
     });
        $("#aderezos").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 2
     });

        $("#extras").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit:1
     });
        
       }
        if(values=='mediano'){
        $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 2
     });  
        $("#barra_fria").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 4
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 2
     });
        $("#extras").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit:1
     });
     }
        if(values=='grande'){
        $("#pollos_mariscos").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 3
     });  
        $("#barra_fria").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 5
     });
        $("#aderezos").imagepicker({
        limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit: 2
     });
        $("#extras").imagepicker({
         limit_reached: function(){alertify.error("Opss..! Ingredientes superados.");},
         hide_select: true,
         show_label: true,
         limit:1
     });
     }
     } 
    });
    };
