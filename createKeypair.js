const crypto = require("crypto");
const fs = require("fs");

function genKeyPair(){
    //Generates an object where the keys are stored in properties `private key` and `public key`
    const KeyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096, //bits standard for rsa keys
        publicKeyEncoding: {
            type: 'pkcs1',  //public key cryptography standards
            format: 'pem'   //most common formatting choice
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    });

    ////create the public key file
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem', KeyPair.publicKey);

    //create the private Key file
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem', KeyPair.privateKey);
}
genKeyPair();