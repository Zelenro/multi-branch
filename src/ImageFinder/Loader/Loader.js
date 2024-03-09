import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Circles
        height="280"
        width="280"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};
