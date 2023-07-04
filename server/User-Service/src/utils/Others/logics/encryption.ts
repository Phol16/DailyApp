import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { IEncryptionFunctionality } from '../../Types/dataTypes';

dotenv.config();

export const saltRound = parseInt(process.env.SALT as string);

export class passEncryption implements IEncryptionFunctionality {
  public async genSalt() {
    return await bcrypt.genSalt(saltRound);
  }

  //encrypting password
  public async passwordEncrypt(password: string, salt: string) {
    try {
      const hashed = await bcrypt.hash(password, salt);
      return hashed;
    } catch (error) {
      console.log('PasswordEncrypt:', error);
      return 'passwordEncrypt: Something went wrong';
    }
  }

  //decrypting
  public async passwordDecrypt(password: string, DB_Password: string) {
    try {
      const result = await bcrypt.compare(password, DB_Password);

      return result;
    } catch (error) {
      console.log('PasswordDecrypt:', error);
      return false;
    }
  }
}
