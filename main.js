function comprar(){


    let comprarEntradas = true
    let maxEntradas = 4
    let precioEntradas= 4500
    
    do{
        let compra =  parseInt(prompt("Bienvenido! Ingresa cantidad de entradas que queres comprar (maximo de 4 por persona, solo efectivo)"))
        if(compra === null){
            break}
        
        if(compra <=4){
            function multiplicar(numA, numB){
                numA= compra
                numB=precioEntradas
                let resultado = numA * numB
                alert("el total es " + resultado + "ARS")
                let pago = parseInt(prompt("Con cuanto vas a pagar?"))
                        function devolucion (num1, num2){
                        num1= pago
                        num2= resultado
                        let devolucion= num1 - num2

                        if(pago<resultado){
                            alert("Monto insuficiente para realizar el pago")
                        }
                        if(pago>resultado){
                        alert("su vuelto es de "+ devolucion + "ARS Gracias por su compra.")
                        
                    }
                        if(pago===resultado){
                            alert("Gracias por el cambio y por su compra.")
                        }

                        }
                        devolucion()
                        
                        
                comprarEntradas = false
               
                }
       
        }
            
            
        
         
        else{
            compra>4
            alert("no podes comprar tantas entradas por persona")
        }
        
        multiplicar()
        }
    
    
   
    while(comprarEntradas)
    
}


comprar()
            
            
            