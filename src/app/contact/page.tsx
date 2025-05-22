import Header from "../components/Header";
import MidImage from "../components/MidImage";
import Form from "next/form";

export default function Home() {
  return (
    <div>
      <Header />
      <MidImage />
      <div className="content-center p-4 relative z-20 isolate">
        <h1 className="font-sans text-xl flex gap-2 mb-2">Contact</h1>
        <p className="font-sans flex mb-2 flex-nowrap">
          You can contact me via email at&nbsp;
          <a
            href="mailto:ashire36@proton.me"
            className="no-underline hover:underline text-sky-400 inline"
          >
            ashire36@proton.me
          </a>
          , or using the contact form below.
        </p>
      </div>

      <Form
        className="bg-white rounded-none dark:bg-black outline-2 outline-emerald-400 dark:outline-emerald-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDTsdn2zxvSad-waZ3ja4IIoan7DIX786j-H6y4H8GKR-Tww/formResponse"
      >
        <div className="flex gap-4 mb-4 w-1/2 xs:w-full">
          <div className="flex-1">
            <label className="mr-2 pr-2">Name</label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="entry.1901982553"
              type="text"
              required
            />
          </div>
          <div className="flex-1">
            <label className="mr-2 pr-2">Email</label>
            <input
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="entry.1322536053"
              type="email"
              required
            />
          </div>
        </div>

        <div className="mb-4 w-1/2 xs:w-full">
          <label className="mr-2 pr-2">Message</label>
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="entry.736781597"
            type="text"
            required
          />
        </div>

        <div>
          <input
            className="cursor-pointer bg-sky-100 dark:bg-sky-400 hover:bg-sky-500 dark:hover:bg-sky-900 font-semibold hover:text-white py-2 px-4 rounded"
            type="submit"
            value="Send"
          />
        </div>
      </Form>
    </div>
  );
}
