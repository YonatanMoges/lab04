let Account = {
    fullName:"Y",
    phoneNumber:"123",
    accountNum:"123",
    currentBalance:60
}
let Account = {
    fullName:"M",
    phoneNumber:"123",
    accountNum:"123",
    currentBalance:50
}

let BankSystem = {
    accountNum : 9596,
    accounts: [],
    numberOfUsers: 0,
    activeAccount:"",
    deposite_money: function(){

        var depositeAmount = prompt("please insert the amount you want to deposite")
        window.accountBalance = window.accountBalance + Number(depositeAmount);
        console.log("your account has been credited with " + depositeAmount + " thank you for banking with us")
    },
    withdraw_money: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let tempAccount = this.accounts[accNumber];
            if(tempAccount.currentBalance > 25){
                let amount = parseInt(prompt("Enter the money to withdraw"));
                if((tempAccount.currentBalance - 25) < amount ){
                    console.log("Your balance is insufficent.");
                }else{
                    tempAccount.currentBalance = tempAccount.currentBalance - amount;
                    return console.log("Transaction is successful!");
                }
            }else{
                console.log("Your balance is insufficent.");
            }

        }else{
            console.log("Account does not exist.");
        }
        return false;
    },
    check_balance: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let tempAccount = this.accounts[accNumber];
          
            return console.log("Your balance is " + tempAccount.currentBalance);;
        }else{
            console.log("Account does not exist.");
        }
        return false;
    },
    transfer_money: function(){
        let accNumber = this.validate_account();
        if(accNumber >= 0){
            let sender = this.accounts[accNumber];
            let reciverAccount = this.validate_account("reciver");
            if( reciverAccount >= 0){
                let reciver = this.accounts[reciverAccount];
                let amount = parseInt(prompt("Enter the transfer money."));
                reciver.currentBalance += amount;
                
                sender.currentBalance -= amount;
                return console.log("Transaction successful!");
               
            }else{
                console.log("Reciver account does not exist")
            }
        }else{
            console.log("Account does not exist");
        }
        return false;
        
    },
    
    validate_account : function(string = "your"){
        let accNumber = prompt("Enter " + string + " account number, please!").trim();
        for (let i = 0; i < this.accounts.length; i++) {
            if(this.accounts[i].accountNum === accNumber) return i;
            
            
        }
        return -1;
    },
   

};

(function(){
 
    console.log("choose service below to use");
    console.log("1, Create Account");
    console.log("2, Deposite");
    console.log("3, Withdrawal");
    console.log("4, Balance");
    console.log("5, transfer");

    var choice = parseInt(prompt("Enter your choice(1. Deposit 2. Withdraw 3. Balance 4.Transfer)"));
    while(choice !== 0){
        if(choice === 1){
            BankSystem.deposite_money();
            break;
        }else if(choice == 2){
            BankSystem.withdraw_money();
        }else if(choice == 3){
            BankSystem.check_balance();
        }else if(choice == 4){
            BankSystem.transfer_money();
        }
            
        
        choice = parseInt(prompt("Enter your choice(1. Deposit /n 2. Withdraw /n 3. Balance /n 4.Transfer)"));
    }


}


)
() 