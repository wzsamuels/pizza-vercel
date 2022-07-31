import {Form} from "@remix-run/react";

export default function IndexRoute() {

  return (
    <main className="flex flex-col items-stretch min-h-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 pl-4 pr-2">
        <div className='w-full'>
          <img className="w-full h-auto my-4 pr-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza2.jpg" alt="Pizza Pic 1"/>
          <img className="w-full my-4 pr-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza5.jpg?tx=q_auto,f_auto" alt="Pizza Pic 2"/>
        </div>
        <div className='w-full'>
          <img className="w-full my-4 pl-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza4.jpg?tx=q_auto,f_auto" alt="Pizza Pic 3"/>
          <img className="w-full my-4 pl-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza3.jpg?tx=q_auto,f_auto" alt="Pizza Pic 4"/>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-2xl my-2 py-2 text-center">Subscribe to our newsletter stay up to date with on new menu</h2>
        <Form method="post" className="my-2" replace>
          <label className="flex my-2 justify-center w-full">
            <input className="border p-2 mx-2" type="text"/>
            <button className="border border-gray-500 rounded-2xl px-4 py-2 mx-4 hover:shadow-2xl" type="submit">Subscribe</button>
          </label>
        </Form>
      </div>
    </main>
  );
}
