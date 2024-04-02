
import axios from 'axios';
import { axiosConfig } from '@colinwallace/proxy';
import { sleep } from '@colinwallace/sleep';
import { formatTimestamp } from '@colinwallace/date-time-processor';
import { notify } from 'feishu-notifier';
import { log } from '@colinwallace/log';


// simple_data_encryptor.js

class DataEncryptor {
    constructor(key) {
        this.key = key;
    }

    encrypt(data) {
        let encryptedData = '';
        for (let i = 0; i < data.length; i++) {
            encryptedData += String.fromCharCode(data.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length));
        }
        return encryptedData;
    }

    decrypt(encryptedData) {
        let decryptedData = '';
        for (let i = 0; i < encryptedData.length; i++) {
            decryptedData += String.fromCharCode(encryptedData.charCodeAt(i) ^ this.key.charCodeAt(i % this.key.length));
        }
        return decryptedData;
    }
}

// Example usage
const encryptor = new DataEncryptor('secret_key');
const encrypted = encryptor.encrypt('Hello, world!');
console.log('Encrypted:', encrypted);
console.log('Decrypted:', encryptor.decrypt(encrypted));

