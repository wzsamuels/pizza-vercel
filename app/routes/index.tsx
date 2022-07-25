export default function Index() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4">
      <div className='w-full'>
        <img className="w-full h-auto my-4 pr-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza2.jpg" alt="Pizza Pic 1"/>
        <img className="w-full my-4 pr-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza5.jpg?tx=q_auto,f_auto" alt="Pizza Pic 2"/>
      </div>
      <div className='w-full'>
        <img className="w-full my-4 pl-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza4.jpg?tx=q_auto,f_auto" alt="Pizza Pic 3"/>
        <img className="w-full my-4 pl-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza3.jpg?tx=q_auto,f_auto" alt="Pizza Pic 4"/>
      </div>
    </div>
  );
}
