
function tabuada(){
       
        let res = document.getElementById('res');
        let tabuadaNove =""
        let n1 = 9

        for (let index = 1; index <= 10; index++) {
                tabuadaNove += 9 + " x " +index+ " = " + n1*index + "<br/>";

                res.innerHTML = tabuadaNove 
                
        }

}