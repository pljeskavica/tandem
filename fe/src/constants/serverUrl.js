export const getServerUrl = () => {
  if (process.env.NODE_ENV === 'production')
    return `https://tandem-be.herokuapp.com/`;
  return `http://localhost:3000`;
};

export const url = getServerUrl();
