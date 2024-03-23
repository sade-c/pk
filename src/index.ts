
import { lookup } from 'dns';
import { generateMnemonic, english, turkish, mnemonicToAccount, privateKeyToAccount } from 'viem/accounts'

function toHexString(byteArray: any) {
	return Array.prototype.map.call(byteArray, function (byte) {
		return ('0' + (byte & 0xFF).toString(16)).slice(-2);
	}).join('');
}
// address ="0x41dd87B432b4773D848BFE4A94876E4c1e58155d"
//  adressin içinde 4 adet 0  var ise döngüyü bitir




 async function getAccount() {
 	let pk; // Declare the 'pk' variable outside the loop

	do {
		const mnemonic = generateMnemonic(turkish)

		console.log("mm", mnemonic);

		pk = mnemonicToAccount(
			mnemonic,
			{
				path: "m/44'/60'/10'/02/07"
			}
		)
		console.log("pk", pk.address);

	} while (!pk.address.includes("000"));

	const privateKey = pk.getHdKey().privateKey as Uint8Array;
	const privateKey2 = new TextEncoder().encode(privateKey.toString());
	console.log("private", privateKey2);
	const hexString = toHexString(privateKey);
	console.log("hexString", hexString);
}
getAccount();





/* const privateKey = pk.getHdKey().privateKey as Uint8Array;
const privateKey2 = new TextEncoder().encode(privateKey.toString());
console.log("private", privateKey2);

console.log("address", pk.address);

const byteArray = new Uint8Array(privateKey);

 
const hexString = toHexString(byteArray);
console.log("hexString", hexString);
 

const accountw = mnemonicToAccount(
	' '
  )
  const privateKey2w = accountw.getHdKey().privateKey as Uint8Array;
console.log("private2", toHexString(privateKey2w));
// 
 */