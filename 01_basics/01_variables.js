const accountId = 144553;
let accountEmail = "abhi@02"
var accountPassword = "12345"
accountCity = "Patna"
let accountState

// accountId = 2 // not allowed beacause const keyword make variable as constant so can't change 
// value

accountEmail = "abhcg@pe"
accountPassword = "98765"
accountCity = "Bengaluru"

console.log(accountId);

/*
    prefer not to use var
    beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// we didn't declared accountState that's why undefined we getting as o/p