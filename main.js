const fs = require("fs");
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')

/* -------------------Encryption--------*/
const  publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.rem', 'utf-8')
//stores a buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'super secret message')
//if you try to "crack the code" you'll get gibberish
console.log(encryptedMessage.toString())

/**-----------Decription(from privateKey/Encrrypted Message) */
const  privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.rem', 'utf-8')
const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);

//converts the buffer to a string and prints the message
console.log(decryptedMessage.toString()