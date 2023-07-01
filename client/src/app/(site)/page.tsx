import Image from 'next/image';
import background from '../../../public/biker.svg';

export default function Home() {
  return (
    <main className='h-[calc(100dvh_-_180px)] flex justify-center my-20'>
      <div className='relative m-auto gap-5 flex flex-col md:flex-row justify-center w-full border-[1px] px-5 md:px-10 py-16 rounded-2xl shadow-lg shadow-white max-w-[1200px]'>
        <section className='flex flex-col items-center gap-4 flex-1'>
          <h1 className='text-xl font-semibold text-headline p-1'>Routine Application</h1>
          <p className=' text-justify leading-8 max-w-xs'>
            An application to track your daily routine
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque doloremque
            facilis reiciendis velit, ex iusto molestiae blanditiis obcaecati. Quisquam
            nam facilis ab soluta temporibus laborum nulla dolorem suscipit labore
            eveniet!
          </p>
        </section>
        <section className='flex-1 flex flex-col items-center'>
          <h1>Log In</h1>
          <form></form>
        </section>
        <Image
          src={background}
          alt='Image'
          width={400}
          height={0}
          className='h-auto absolute -top-[45%] hidden md:flex'
        />
      </div>
    </main>
  );
}
