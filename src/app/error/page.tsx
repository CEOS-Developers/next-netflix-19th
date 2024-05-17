import Head from 'next/head';

export default function ApiError() {
  return (
    <div>
      <Head>
        <title>API Access Denied</title>
        <meta name="description" content="Access to the API is restricted" />
      </Head>
      <main>
      <h1 className='text-[150px]  mt-[300px] flex justify-center'>☠️</h1>
      <h2 className="ml-[16px] mt-[20px] text-[20.92px] font-bold flex justify-center"> 403 - API Access Denied</h2>
        <p className="ml-[16px]  text-[20.92px] flex justify-center">You do not have permission to access this API.</p>
        
      </main>
    </div>
  );
}
