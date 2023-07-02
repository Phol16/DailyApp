import { Iresult } from '../../Types/dataTypes';

const getAuthHeader = (header: string): Iresult => {
  if (header && header.includes('Bearer')) {
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
