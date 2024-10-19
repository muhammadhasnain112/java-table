
var number = prompt("Enter your value:");

if (number !== null) {
    
    
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }
    
   
    alert(table);
    
}


   