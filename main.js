
function calcular(){
    let tipo = document.querySelector("#tipo").value;
    let cantidad = parseInt(document.querySelector("#cantidad").value);
    let tarjeta = document.querySelector("#tarjeta").value;
    let resultado = document.querySelector("#resultado")
    let pago = 0

    if (tipo == "sencilla"){
        if(tarjeta == "si"){
            pago = 51 * cantidad + (51 * cantidad * 0.05)
            resultado.innerHTML = "El resultado es: "+ pago
        }else{
            pago = 51 * cantidad
            resultado.innerHTML = "El resultado es: "+ pago
        }
    }else if(tipo == "doble"){
        if(tarjeta == "si"){
            pago = 58 * cantidad + (51 * cantidad * 0.05)
            resultado.innerHTML = "El resultado es: "+ pago
        }else{
            pago = 58 * cantidad
            resultado.innerHTML = "El resultado es: "+ pago
        }
    }else if(tipo == "triple"){
        if(tarjeta == "si"){
            pago = 64 * cantidad + (51 * cantidad * 0.05)
            resultado.innerHTML = "El resultado es: "+ pago
        }else{
            pago = 64 * cantidad
            resultado.innerHTML = "El resultado es: "+ pago
        }
    }
}

document.querySelector("button").addEventListener("click", calcular)

