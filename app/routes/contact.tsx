import Alert from "@reach/alert";
import type {ActionFunction, LinksFunction, LoaderFunction} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {Form, useActionData, useCatch, useTransition} from "@remix-run/react";
import * as React from "react";
import contact1 from "public/images/contact2.jpg"
import stylesUrl from "../styles/contact.css"

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl}]
}

function validateContactName(name: string) {
  if (name.length < 2) {
    return `That name is too short`;
  }
}

function validateContactMessage(message: string) {
  if (message.length < 2) {
    return `That message is too short`;
  }
}

function validateContactEmail(email: string) {
  if (email.length < 10) {
    return `That email is too short`;
  }
}

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
  formError?: string;
  fieldErrors?: { name: string | undefined; message: string | undefined; email: string | undefined };
  fields?: {
    name: string;
    message: string;
    email: string
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {

  const formData = await request.formData();
  const name = formData.get("name");
  const message = formData.get("message");
  const email = formData.get("email")
  const values = Object.fromEntries(formData)

  if (typeof name !== "string" || typeof message !== "string" || typeof email !== "string") {
    return badRequest({ formError: `Form not submitted correctly.` });
  }

  const fieldErrors = {
    name: validateContactName(name),
    message: validateContactMessage(message),
    email: validateContactEmail(email),
  };
  const fields = {name, message, email};
  if(Object.values(fieldErrors).some(Boolean)) {
    return badRequest({fieldErrors, fields})
  }

  const API =
    "https://d2e3jli240.execute-api.us-east-1.amazonaws.com/default/pizza-email-function";


  const response = await fetch(API, {
    method: "post",
    //body: JSON.stringify({name, message, email})
    body: JSON.stringify(values)
  })

  console.log(response)
  return response.json();
};


export default function ContactRoute() {
  const actionData = useActionData();
  const transition = useTransition();
  const state: "idle" | "success" | "error" | "submitting" = transition.submission
    ? "submitting"
    : actionData
      ? "success"
      : actionData?.error
        ? "error"
        : "idle";

  console.log(state)
  console.log(actionData)

  return (
    <div className="flex m-0 items-center justify-center w-full h-[calc(100vh-100px)]">

      <div
        className="w-full m-0 h-full bg-no-repeat bg-cover bg-center  flex justify-center py-8"
        style={{backgroundImage: `url(${contact1})`, margin: 0}}>
        <div className="font-['Cabin']  lg:mt-0  w-[700px] max-w-[95%] h-fit  max-h-[600px] p-5 items-center text-lg bg-white contact-form">

          <Form
            method="post"
            replace
            className="w-full flex flex-col justify-center items-center"
            aria-hidden={state === "success"}
          >
            <h1
              className="font-['Montserrat'] text-3xl text-center mb-8"
            >
              Let us know what you think!
            </h1>
            <fieldset className='w-full flex flex-col justify-center items-center'>
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
                    defaultValue={actionData?.fields?.[input.key as keyof typeof actionData.fields]}
                  />
                )}
                {actionData?.fieldErrors?.[input.key as keyof typeof actionData.fields] ? (
                  <p className="text-purple-500 font-bold" role="alert" id="name-error">
                    {actionData.fieldErrors?.[input.key as keyof typeof actionData.fields]}
                  </p>
                ) : null}
              </label>
            ))}
            </fieldset>
            <button className="border rounded-2xl px-4 py-2 max-w-[100px]" type="submit">Submit</button>
          </Form>

          <div aria-hidden={state !== "success"}>
            <h2 className="font-['Montserrat'] text-3xl text-center mb-8">
              Your message has been successfully sent!
            </h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch();

  if(caught.status === 400) {
    return (
      <div>
        <p>400 Error</p>
      </div>
    )
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return <div>Something unexpected went wrong. Sorry about that.</div>;
}
