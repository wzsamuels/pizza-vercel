import {Form, useActionData, useTransition} from "@remix-run/react";
import type {ActionFunction} from "@remix-run/node";

export const action: ActionFunction = async ({request}) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 200
}

export default function IndexRoute() {
  const actionData = useActionData();
  const transition = useTransition();
  const state: "idle" | "success" | "error" | "submitting" = transition.submission
    ? "submitting"
    : actionData === 200
      ? "success"
      : actionData?.error
        ? "error"
        : "idle";

  return (
    <main className="flex flex-col items-stretch min-h-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 pl-4 pr-2">
        <div className='w-full'>
          <img className="w-full my-4 pr-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza5.jpg?tx=q_auto,f_auto" alt="Pizza Pic 2"/>
          <img className="w-full h-auto my-4 pr-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza2.jpg" alt="Pizza Pic 1"/>
        </div>
        <div className='w-full'>
          <img className="w-full my-4 pl-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza3.jpg?tx=q_auto,f_auto" alt="Pizza Pic 4"/>
          <img className="w-full my-4 pl-2" src="https://twinsilver.mo.cloudinary.net/pizza/pizza4.jpg?tx=q_auto,f_auto" alt="Pizza Pic 3"/>
        </div>
        <div className="w-full col-span-2">
          <img className="w-full" src="https://twinsilver.mo.cloudinary.net/pizza/pizza6.jpg?tx=q_auto,f_auto" alt="Pizza Pic 4"/>
        </div>
      </div>

      <div className="py-8 flex flex-col items-center">
        <h2 className="text-2xl my-2 py-2 text-center">Subscribe to our newsletter stay up to date with on new menu</h2>
        {state !== "success" ?
          <Form method="post" className="my-2" replace>
            <label className="flex my-2 justify-center w-full">
              <input className="border border-gray-500 p-2 mx-2 rounded" type="text"/>
              <button
                className="border border-gray-500 rounded-2xl px-4 py-2 mx-4 bg-red-900 text-white hover:bg-red-700 hover:shadow-2xl "
                type="submit"
              >
                {state === 'submitting'
                  ? <span>Subscribing</span>
                  : <span className="hover:-translate-y-1">Subscribe</span>
                }
              </button>
            </label>
          </Form>
          :
          <span className="text-center font-bold text-2xl">Subscribed!</span>
        }
      </div>
    </main>
  );
}
