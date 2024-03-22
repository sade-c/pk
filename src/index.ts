
import { generateMnemonic,english,turkish, mnemonicToAccount, privateKeyToAccount } from 'viem/accounts'
 
function toHexString(byteArray:any) {
	return Array.prototype.map.call(byteArray, function(byte) {
	  return ('0' + (byte & 0xFF).toString(16)).slice(-2);
	}).join('');
  }

 
const mnemonic = generateMnemonic(turkish)
console.log("mm",mnemonic);

const pk = mnemonicToAccount(
	mnemonic,
	{
	  path: "m/44'/60'/10'/02/07"
	}
)

 
const privateKey = pk.getHdKey().privateKey as Uint8Array;
const privateKey2 = new TextEncoder().encode(privateKey.toString());
console.log("private", privateKey2);

console.log("address", pk.address);

const byteArray = new Uint8Array(privateKey);

 
const hexString = toHexString(byteArray);
console.log("hexString", hexString);
 

const accountw = mnemonicToAccount(
	'oyuncak ragbet panel kidemli urun imlec komsu sensor ragbet rafadan kosegen mesken'
  )
  const privateKey2w = accountw.getHdKey().privateKey as Uint8Array;
console.log("private2", toHexString(privateKey2w));