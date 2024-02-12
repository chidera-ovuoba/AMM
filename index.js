const xrpl = require("xrpl");

async function main(){
  
const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
await client.connect().then(()=>console.log('Connected to the XRP Ledger'));

const func_account = 
await client.disconnect();
}
main()