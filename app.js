const sendQuestion = () =>{
    const button = document.querySelector('#preguntaUser button');

    button.addEventListener('click', getInputValue);
}

const getInputValue = () =>{
    let inputTag = document.querySelector('#preguntaUser input').value;

    document.querySelector('#preguntaUser input').value = "";

    sendAnswer();
}

const pressEnterFunc = () =>{
    const inputTag = document.querySelector('#preguntaUser input');
    
    inputTag.addEventListener("keydown", function(e){
        if(e.code === 'Enter' && inputTag.value !== '' ){
            getInputValue();
        }
    });
}

const sendAnswer = () =>{
    let randomNum = Math.floor(Math.random() * 9);
    const espacioRespuesta = document.querySelector('#respuestaMagica')
    let respuesta;

    switch(randomNum){
        case 0:
            respuesta = 'Definitivamente no';
            break;

        case 1:
            respuesta = '¿Puedes reformular tu pregunta?'
            break;
        
        case 2:
            respuesta = 'Tendrás que esperar, pero seguramente si.';
            break; 
        
        case 3:
            respuesta = 'No estoy seguro.';
            break;  
            
        case 4:
            respuesta = 'Eso deberías saberlo ya.';
            break;   
        
        case 5:
            respuesta = 'Haz lo que sientes.';
            break;  
            
        case 6:
            respuesta = 'Realmente esta respuesta no importa, importa lo que tu pienses.';
            break;   

        case 7:
            respuesta = 'No lo sé todavía.';
            break;   

        default:
            respuesta = 'Tendrás que esperar un poco más para eso.';
            break;    
    }

    espacioRespuesta.innerHTML = respuesta;
    
}

sendQuestion();
pressEnterFunc();