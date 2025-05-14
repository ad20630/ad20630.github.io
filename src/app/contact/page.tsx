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
        <p className="font-sans flex gap-2 mb-2">
          You can contact me using the form below, or via email at
          ashire36@proton.me.
        </p>
      </div>
      <Form className="" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeDTsdn2zxvSad-waZ3ja4IIoan7DIX786j-H6y4H8GKR-Tww/formResponse">
        <label>Name</label>
        <input name="entry.1901982553" type="text" required/>

        <label>Email</label>
        <input name="entry.1322536053" type="email" required />

        <label>Message</label>
        <input name="entry.736781597" type="text" required />

        <input type="submit" value="Send" />
      </Form>
    </div>
  );
}
