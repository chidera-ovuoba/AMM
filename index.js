const xrpl = require("xrpl");

async function main(){
  
const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
await client.connect();

const fund_account = await client.fundWallet();
const test_wallet = fund_account.wallet
// Querying the XRP Ledger for getting info about an address
const reponse = await client.request({
    "command":"account_info",
    "account":test_wallet.classicAddress,
    "ledger_index":"validated"
});
// listening on disconnection event 
client.request({
    "command":"subscribe",
    "streams":["ledger","server"]
})
client.on("disconnected",async (server)=>{
    console.log(`Server: ${server}`)
})
// console.log(reponse);
await client.disconnect();
}
main()