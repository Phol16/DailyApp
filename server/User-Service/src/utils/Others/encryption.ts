import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const saltRound = parseInt(process.env.SALT as string);

export const genSalt = async()=>{ return await bcrypt.genSalt(saltRound) };

//encrypting password
export const passwordEncrypt = async (password: string, salt:string) => {
  try {
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
  } catch (error) {
    console.log('PasswordEncrypt:', error);
  }
};

//decrypting
export const passwordDecrypt = async (password: string, DB_Password: string) => {
  try {
    const result = await bcrypt.compare(password, DB_Password);

    return result;
  } catch (error) {
    console.log('PasswordDecrypt:', error);
  }
};
