import "./styles.css";

//Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos
//que:
//En caso afirmativo el usuario responderá si
//En caso contrario responderá no.
//Si el usuario responde si se escribirá por el documento «irás a la cárcel».
//Si el usuario responde no se escribirá por el documento web «irás a casa».
//En cualquier caso en el documento web se escribirá «la documentación por favor».

//primero input que pregunte "si o no"
//segundo: una condicion si responde si, o no.
//mostrarle cuando dice si: "iras a la carcel";
//cuando no; "iras a casa"
let btnEnv = document.getElementById("btnEnviar");

btnEnv?.addEventListener("click", function () {
  let rotulo = document.getElementById("dato").value;
  if (rotulo === "si") {
    console.log("iras a la carcel");
  }
  if (rotulo === "no") {
    console.log("iras a casa");
  } else {
    console.log("la documentacion por favor");
  }
});

//Escribe un programa que responda a un usuario que quiere comprar un helado
//en una conocida marca de comida rápida cuanto le costará en función del
//gratinado que elija.
//El helado sin gratinado cuesta 1.90$
//El gratinado de oreo cuesta 1$.
//El gratinado de KitKat cuesta 1.50$.
//El gratinado de brownie cuesta 0.75$.
//El gratinado de chips de chocolate cuesta 0.95$.
//En caso de no disponer del gratinado solicitado por el usuario el programa
//escribirá por pantalla «no tenemos este gratinado, lo sentimos. » y a
//continuación informar del precio del helado sin ningún gratinado.
//Finalmente, el programa escribe por pantalla el precio del helado con el
//gratinado seleccionado (o ninguno
let compra = document.getElementById("btnEnviar2");

compra.addEventListener("click", () => {
  let helados: string = document.getElementById("dato2").value;
  switch (helados) {
    case "el helado sin gratinar":
      console.log("el helado sin gratinar cuesta $1.90");
      break;

    case "el gratinado de oreo":
      console.log("el gratinado de oreo cuesta $1");
      break;

    case "el gratinado de kitKat":
      console.log("el gratinado de kitKat cuesta $1.50");
      break;

    case "el gratinado de brownie":
      console.log("el gratinado de brownie cuesta $0.75");
      break;

    case "el gratinado de chips de chocolate":
      console.log("el gratinado de chips de chocolate cuesta $1.50");
      break;
  }
});
