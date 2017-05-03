const readline = require('readline');
const testString  = require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = true;
        if (testString.checkLength(str) == false){
            passsesAllChecks = false;
        }
        if (testString.conaintsUpper(str) == false){
            passsesAllChecks = false;
        }
        if (testString.containsLower(str) == false){
            passsesAllChecks = false;
        }
        if (testString.containsNumerical(str) == false){
            passsesAllChecks = false;
        }
        if (testString.containsSpecial(str) == false){
            passsesAllChecks = false;
        }
        //Conditional Statements here.


        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
