const crypto  = require("crypto")
const hash = crypto.createHash("sha256")
const fs = require("fs")
const encrypt = require("./encrypt")
const decrypt = require("./decrypt")

const myData = {
    firstName: 'Sam',
    lastName: 'Chuks',
    socialSecurityNumber:'Never put a personal info in a digitally signed \
    message since this form of cryptography does not hide the data'
}

//String version of our data that can be hashed
const myDataString = JSON.stringify(myData);

//Sets the value on the hash object: requires a string format, so we must convert to a string form
hash.update(myDataString)

//JHashed data into a hexadecimal format
const hashedData = hash.digest('hex');

const senderPrivateKey =   fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf-8');
const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData)

const packageOfDataToSend = {
    algorithm: 'sha256',
    originalData: myData,
    signedAndEncryptedMessage: signedMessage
}

module.exports.packageOfDataToSend = packageOfDataToSend;