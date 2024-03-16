/*Esta primera función se debe a que a la hora de cambiar el color de fondo
con un boton tenía problemas porque la primera vez que le daba al boton
se ponia el color en negro como atributo del body, de esta forma en cambio,
se pone al cargar,ya que lo llamo con un onload del body, y la primera vez
que apreto al botón lo cambia de forma correcta*/
function colorBody(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "black";
}
//Cambio de color de fondo
function cambiarTema(){
    let body = document.getElementsByTagName("body")[0];
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "darkgrey";
    } else {
        body.style.backgroundColor = "black";
    }
}

//Estructura de carruseles, para el boton siguiente y para el de anterior
//Hay carruseles en 3 páginas y todos utilizan estas funciones
var i = 0;
function avanzar(){    
    let article = document.getElementsByClassName("parrafo");
    article[i].style.display = "none";
    i++;
    if(i >= article.length){
        i = 0;
    }
    article[i].style.display = "flex";    
}
function retroceder(){
    let article = document.getElementsByClassName("parrafo");
    article[i].style.display = "none";
    i--;
    if(i < 0){
        i = article.length - 1;
    }
    article[i].style.display = "flex";
}
//Esto se utilizará mas adelante
function generarID(){
    return parseInt(Math.random() * 1000 + 1);
}

/*Validación formulario Sorà*/ 
function validarDatos(){
    /*Nuestra idea para generar un carnet de socio pasaba por permitir
    añadir una foto, pero la única forma de que funcionara fue con un método
    que encontramos por internet que no acababamos de entender como funciona.
    Hemos decidido dejarlo aquí como comentario, asi como en el html 
    "suscripcion.html" y la regex que lo validaba, pero no utilizarlo.
    En su lugar hemos usado el logo del equipo como imagen generica para
    todos los carnets.*/
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    nombre = nombre.toUpperCase();
    apellido = apellido.toUpperCase();
    /*let foto = document.getElementById("foto").value;*/
    let suscripcion = document.getElementById("suscripcion").value;
    let tarjeta = document.getElementById("tarjeta").value;
    tarjeta = tarjeta.replace(/\s+/g, '').replace(/-/g, '');
    if(!/^[A-ZÁÉÍÓÚÀÈÒ][A-ZÁÉÍÓÚÀÈÒ ]+$/.test(nombre)){
        alert("Nombre no válido");
        return false;
    }
    if(!/^[A-ZÁÉÍÓÚÀÈÒ][A-ZÁÉÍÓÚÀÈÒ ]+$/.test(apellido)){
        alert("Apelido no válido");
        return false;
    }
    /*if(!/^.*(jpg|jpeg|png)$/.test(foto) || foto == null){
        alert("Suba una imagen por favor")
        return false;
    }*/
    
    if(/^Elige tu suscripción$/.test(suscripcion)){
        alert("Elige el tipo de suscripción");
        return false;
    }
    if(!/^4[0-9]{15}$/.test(tarjeta)){
        alert("Tarjeta no válida")
        return false;
    }
    return true;
}
function crearCarnet() {
    let suscripcion = document.getElementById("suscripcion").value;
    document.getElementById("formulario").style.display = "none";
    

    let carnet = document.getElementById("carnet");
    carnet.style.display = "flex";
    carnet.style.flexDirection = "column";

    
    /*let foto = inputFoto.files[0];

    let lector = new FileReader();

    lector.onload = function (e) {
        var imagenBase64 = e.target.result;

        localStorage.setItem("imagenCargada", imagenBase64);
        let imagen = document.createElement("img");
        imagen.alt = "foto carnet";
        imagen.src = imagenBase64;
        imagen.style.width = "100px";
        imagen.style.height = "150px";
        document.getElementById("interiorCarnet").innerHTML = '';

        document.getElementById("interiorCarnet").appendChild(imagen);
    };
        
    lector.readAsDataURL(foto);*/
    switch (suscripcion) {
        case "Normal":
            carnet.style.backgroundColor = "green";
            break;
        case "Colaborador":
            carnet.style.backgroundColor = "red";
            break;
        case "Premium":
            carnet.style.backgroundColor = "rgb(212,175,55)";
            carnet.style.color = "rgb(80,00,80)";
            break;
    }

    document.getElementById("tituloCarnet").textContent = "CROW GAMING INTEL E-SPORTS CLUB";
    document.getElementById("name").textContent = document.getElementById("nombre").value + " " + document.getElementById("apellido").value;
    document.getElementById("suscription").textContent = document.getElementById("suscripcion").value;
    document.getElementById("identificador").textContent = "Socio nº: 000" + generarID();
}

//En la página jugadores.html se muestra un texto si colocas el ratón
//encima de la imagen y desaparecera al salir.
function mostrarText() {
    let tooltip = document.getElementsByClassName("oculto");
    
    tooltip[i].style.visibility = "visible";
}function ocultarText() {
    let tooltip = document.getElementsByClassName("oculto");
    tooltip[i].style.visibility = "hidden";
}

/*Función que genera automáticamente un campo de pago y un botón
para realizar el pago solo cuando se elige un método de pago. El campo
que se genera y la información que se debe aportar cambian en función
del método de pago elegido. Cuenta con una fución auxiliar reset que
borra el elemento anterior si se cambia de método de pago*/
function pagament(){    
    let opcio = document.getElementById("tarjeta").value;
    let form = document.getElementById("form");    
    if(document.getElementById("ele") != null){
        reset();
    }    let but = document.createElement("button");
    but.setAttribute("type","submit");
    but.textContent="Envia";
    let nuevoElemento = document.createElement("input");
    nuevoElemento.setAttribute("id","ele");
    nuevoElemento.setAttribute("type","text");
    let lbl = document.createElement("label");
    lbl.setAttribute("for","ele");    
    switch(opcio){
        case "visa":
            lbl.textContent = "Número de tarjeta: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
        case "mc":
            lbl.textContent = "Número de tarjeta: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
        case "payp":
            lbl.textContent = "Correo electrónico: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
        case "biz":
            lbl.textContent = "Número de teléfono: ";
            form.appendChild(lbl);
            form.appendChild(nuevoElemento);
            form.appendChild(but);
            break;
    }
}function reset(){
    let form = document.getElementById("form");    
    if(document.getElementById("ele") != null){
        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
        form.removeChild(form.lastChild);
    }
}
/*Validació formulari Barbón*/
function validar(){
    let nom = document.getElementById("nom").value;
    nom = nom.toUpperCase();
    if(!/^[A-ZÁÉÍÓÚÀÈÒ][A-ZÁÉÍÓÚÀÈÒ ]+$/.test(nom)){
        alert("Nombre no válido");
        return false;
    }    
    let llin = document.getElementById("llin").value;
    llin = llin.toUpperCase();
    const patternLlin = !/^[A-ZÁÉÍÓÚÀÈÒ][A-ZÁÉÍÓÚÀÈÒ ]+$/;
    if(!llin.test(patternLlin)){
        alert("Apellidos no válidos");
        return false;
    }    
    let dir = document.getElementById("dir").value;
    const patternCall= /^(calle|avenida|carretera|plaza|paseo|camino)\s[A-Za-z0-9\s\.,#-]+$/;
    if(!dir.test(patternCall)){
        alert("Dirección no válida");
        return false;
    }    
    let mail = document.getElementById("email").value;
    const patternMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!mail.test(patternMail)){
        alert("Dirección de correo electrónico no válida");
        return false;
    }    
    let tlf = document.getElementById("tlf").value;
    const patternTlf = /^6[0-9]{8}$/;
    if(!tlf.test(patternTlf)){
        alert("Teléfono no válido");
        return false;
    }    
    return true;
}
/*He hecho 2 funciones para cada una de las 4 fotos con clase fotoEvento,
para poder hacer que se agranden al entrar el raton y se reduzcan al salir*/
//foto1
function agrandarFotos1(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "none";
    }
    let foto = document.getElementById("evento1");
    foto.style.display = "flex";
    foto.style.width= "100%";
    foto.style.height = "80%";
}
function reducirFotos1(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "flex";
    }
    let foto = document.getElementById("evento1");
    foto.style.width= "20%";
    foto.style.height = "20%";
}
//foto2
function agrandarFotos2(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "none";
    }
    let foto = document.getElementById("evento2");
    foto.style.display = "flex";
    foto.style.width= "100%";
    foto.style.height = "80%";
}
function reducirFotos2(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "flex";
    }
    let foto = document.getElementById("evento2");
    foto.style.width= "20%";
    foto.style.height = "20%";
}
//foto 3
function agrandarFotos3(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "none";
    }
    let foto = document.getElementById("evento3");
    foto.style.display = "flex";
    foto.style.width= "100%";
    foto.style.height = "80%";
}
function reducirFotos3(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "flex";
    }
    let foto = document.getElementById("evento3");
    foto.style.width= "20%";
    foto.style.height = "20%";
}
//foto 4
function agrandarFotos4(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "none";
    }
    let foto = document.getElementById("evento4");
    foto.style.display = "flex";
    foto.style.width= "100%";
    foto.style.height = "80%";
}
function reducirFotos4(){
    let fotos = document.getElementsByClassName("fotosEvento");
    for(let i = 0 ; i < fotos.length ; i++){
        fotos[i].style.display = "flex";
    }
    let foto = document.getElementById("evento4");
    foto.style.width= "20%";
    foto.style.height = "20%";
}
/*Variables globales auxiliares que se usarán para el cálculo de la media*/
var media = 0;
var count = 0;
var acumulado = 0;
/*Esta función recoge el valor de la checkbox marcada(solo puede haber una) 
y al enviar la votación mediante el botón hace el cálculo de la média 
de entre 1 y 5 y la muestra de forma dinámica en la web*/
function puntuaPagina(){
    count++;

    let checkbox1 = document.getElementById("1estrella");
    let checkbox2 = document.getElementById("2estrella");
    let checkbox3 = document.getElementById("3estrella");
    let checkbox4 = document.getElementById("4estrella");
    let checkbox5 = document.getElementById("5estrella");
    let valor1 = +checkbox1.value;
    let valor2 = +checkbox2.value;
    let valor3 = +checkbox3.value;
    let valor4 = +checkbox4.value;
    let valor5 = +checkbox5.value;
        
        if(checkbox1.checked != false){
            acumulado = acumulado + valor1;
            media = (acumulado/count).toFixed(2);
        }
        if(checkbox2.checked != false){
            acumulado = acumulado + valor2;
            media = (acumulado/count).toFixed(2);
        }
        if(checkbox3.checked != false){
            acumulado = acumulado + valor3;
            media = (acumulado/count).toFixed(2);
        }
        if(checkbox4.checked != false){
            acumulado = acumulado + valor4;
            media = (acumulado/count).toFixed(2);
        }
        if(checkbox5.checked != false){
            acumulado = acumulado + valor5;
            media = (acumulado/count).toFixed(2);
        }

        document.getElementById("media").textContent = media;
    }
    /*Función que restringe al usuario la elección a solo un checkbox a la vez
    (hay formas mas eficientes de hacerlo, pero ya que lo hice así lo dejo)*/
    function desmarca(){
        let checkbox1 = document.getElementById("1estrella");
        let checkbox2 = document.getElementById("2estrella");
        let checkbox3 = document.getElementById("3estrella");
        let checkbox4 = document.getElementById("4estrella");
        let checkbox5 = document.getElementById("5estrella");
        checkbox1.onclick = function(){
            if(checkbox1.checked != false){
                checkbox2.checked =null;
                checkbox3.checked =null;
                checkbox4.checked =null;
                checkbox5.checked =null;
            }
        }
        checkbox2.onclick = function(){
            if(checkbox2.checked != false){
                checkbox1.checked=null;
                checkbox3.checked =null;
                checkbox4.checked =null;
                checkbox5.checked =null;
            }
        }
        checkbox3.onclick = function(){
            if(checkbox3.checked != false){
                checkbox1.checked=null;
                checkbox2.checked =null;
                checkbox4.checked =null;
                checkbox5.checked =null;
            }
        }
        checkbox4.onclick = function(){
            if(checkbox4.checked != false){
                checkbox1.checked=null;
                checkbox3.checked =null;
                checkbox2.checked =null;
                checkbox5.checked =null;
            }
        }
        checkbox5.onclick = function(){
            if(checkbox5.checked != false){
                checkbox1.checked=null;
                checkbox3.checked =null;
                checkbox4.checked =null;
                checkbox2.checked =null;
            }
        }
    }
