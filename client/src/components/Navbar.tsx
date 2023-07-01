import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-transparent z-10 text-paragraph py-4 px-5 fixed w-full'>
      <section className='flex justify-between'>
        <h1 className='font-semibold text-headline'>Daily App</h1>
        {<div>Profile</div>}
      </section>
    </div>
  );
};

export default Navbar;
