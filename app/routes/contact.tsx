import Alert from "@reach/alert";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {Form, useActionData, useTransition} from "@remix-run/react";
import * as React from "react";
import contact1 from "public/images/contact2.jpg"

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

const formInputs = [
  {
    key: 'name',
    type: 'text',
    label: 'Your name',
    placeholder: 'John Doe'
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    key: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

type ActionData = {
  errors?: {
    title?: string;
    body?: string;
  };
};

export const action: ActionFunction = async ({ request }) => {

  const formData = await request.formData();
  const name = formData.get("name");
  const message = formData.get("message");
  const email = formData.get("email")

  console.error("test")

  if (typeof name !== "string" || name.length === 0) {
    return json<ActionData>(
      { errors: { title: "Name is required" } },
      { status: 400 }
    );
  }

  if (typeof message !== "string" || message.length === 0) {
    return json<ActionData>(
      { errors: { body: "Message is required" } },
      { status: 400 }
    );
  }

  if (typeof email !== "string" || email.length === 0) {
    return json<ActionData>(
      { errors: { body: "Email is required" } },
      { status: 400 }
    );
  }

  const endpoint =
    "https://d2e3jli240.execute-api.us-east-1.amazonaws.com/default/pizza-email-function";

  const body = JSON.stringify({name, message, email});

  const requestOptions = {
    method: "POST",
    body
  };

  console.log(body)

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      console.log(response)
    })
  //const note = await createNote({ title, body });

  return redirect(`/contact`);
};


export default function ContactRoute() {
  const actionData = useActionData<ActionData>();
  const transition = useTransition();

  return (
    <div className="flex m-0 items-center justify-center w-full h-[calc(100vh-100px)]">

      <div
        className="w-full m-0 h-full bg-no-repeat bg-cover bg-center  flex justify-center py-8"
        style={{backgroundImage: `url(${contact1})`, margin: 0}}>

      <Form className="font-['Cabin']  lg:mt-0 flex flex-col justify-center w-[700px] max-w-[95%] h-[95%] max-h-[600px] p-5 items-center text-lg bg-white rounded-2xl">
        <h1
          className="font-['Montserrat'] text-3xl text-center mb-8"
        >
          Let us know what you think!
        </h1>
        { formInputs.map(input => (
            <label key={input.key} className="mt-4 w-full my-4 text-left">
              {input.label}
              {input.type === 'textarea' ? (
                <textarea
                  className="border block w-[calc(100%-20px)] w-full rounded border border-gray-500 px-2 py-1 text-lg"
                  name={input.key}
                  placeholder={input.placeholder}
                />
              ) : (
                <input
                  className="block w-[calc(100%-20px)] border w-full rounded border border-gray-500 px-2 py-1 text-lg"
                  name={input.key}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              )}
            </label>
        ))}
        <button className="border rounded-2xl px-4 py-2 max-w-[100px]" type="submit">Submit</button>
      </Form>
      </div>
    </div>
  )
}