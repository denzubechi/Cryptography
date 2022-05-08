const crypto = require("crypto")

//Incase of data protection
function encryptWithPublicKey(publicKey, message){
    const bufferMessage = Buffer.from(message, 'utf-8')

    return crypto.publicEncrypt(publicKey, bufferMessage)
}

//Incaase of a signature
function encryptWithPrivateKey(privateKey, message){
    const bufferMessage = Buffer.from(message, 'utf-8')

    return crypto.privateEncrypt(privateKey, bufferMessage)
}
module.exports.encryptWithPublicKey = encryptWithPublicKey;
module.exports.encryptWithPrivateKey = encryptWithPrivateKey;

