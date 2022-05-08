const crypto = require('crypto')
const fs = require("fs")
const encrypt = require("./encrypt")
const decrypt = require("./decrypt")

//This is the data that we're recieving from the sender
const recievedData  = require('./signMessage').packageOfDataToSend;

const hash = crypto.createHash(recievedData.algorithm)

const publicKey =   fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf-8');
const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, recievedData.signedAndEncryptedMessage)

const decryptedMessageHex = decryptedMessage.toString()

const hashOfOriginal = hash.update(JSON.stringify(recievedData.originalData))
const hashOfOriginalHex = hash.digest('hex')

if(hashOfOriginalHex === decryptedMessageHex){
    console.log('Success! The Data has not been tampered with and the sender is valid')
}else{
    console.log('Someone is trying to manipulate the idata or something else is wrong')
}