$(document).on("click", "#alerta", function(){
    navigator.notification.alert("minha mensagem");
});
$(document).on("click","#confirm",function(){
    function confirma(buttonIndex){
        if(buttonIndex == "1"){
            navigator.notification.alert("Escolheu a opção A");
        }else{
            navigator.notification.alert("Escolheu a opção B");
        }
    }
    navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:",['B','A']);
});
$(document).on("click","#beep",function(){
    navigator.notification.beep(4000);
});