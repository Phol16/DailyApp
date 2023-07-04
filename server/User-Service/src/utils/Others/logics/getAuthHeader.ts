import { Iresult } from '../../Types/dataTypes';

//get authorization header
const getAuthHeader = (header: string): Iresult => {
  //check if header has data and it includes Bearer string
  if (header && header.includes('Bearer')) {
    //splitting the header with " " and getting the data
    const authId = header.split(' ')[1];

    return {
      status: 200,
      message: authId,
    };
  }

  return {
    status: 400,
    message: 'Invalid Authorization Header',
  };
};

export default getAuthHeader;
