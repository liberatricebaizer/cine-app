
import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhoneCall, FiSend, FiCheckCircle } from "react-icons/fi";
import Layout from "../layout/Layout";
import PageHeader from "../components/PageHeader";
import { Input, Message } from "../components/UsedInputs";

const ways = [
  {
    id: 1,
    title: "Email us",
    info: "Send us a message any time.",
    icon: FiMail,
    contact: "liberatricebaizer@gmail.com",
    href: "mailto:liberatricebaizer@gmail.com",
  },
  { id: 2, title: "Call us", info: "Talk to the team directly.", icon: FiPhoneCall, contact: "+257 67 157 670", href: "tel:+25767157670" },
  { id: 3, title: "Visit us", info: "Street No. 8, Mirango 1, Kamenge", icon: FiMapPin, contact: "Bujumbura, Burundi" },
];

const empty = { name: "", email: "", subject: "", message: "" };

const Contactus = () => {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend or an email service
    setSent(true);
  };

  return (
    <Layout>
      <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8">
        <PageHeader title="Get in touch" text="Questions, ideas or feedback? We would love to hear from you." />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <ul className="space-y-8">
            {ways.map(({ id, title, info, icon: Icon, contact, href }) => (
              <li key={id} className="flex gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4b942] text-xl text-black">
                  <Icon />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">{title}</h2>
                  <p className="mt-1 text-sm text-[#a79fb5]">{info}</p>
                  {href ? (
                    <a href={href} className="mt-2 inline-block break-all font-medium text-[#f4b942] hover:underline">
                      {contact}
                    </a>
                  ) : (
                    <p className="mt-2 font-medium text-white">{contact}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-[#17121f] p-7 ring-1 ring-white/10 sm:p-10">
            {sent ? (
              <div className="py-10 text-center" role="status">
                <FiCheckCircle className="mx-auto text-5xl text-[#f4b942]" />
                <h2 className="cv-display mt-5 text-2xl font-extrabold text-white">Message sent</h2>
                <p className="mt-2 text-[#a79fb5]">Thank you, {form.name || "friend"}. We will get back to you soon.</p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(empty);
                    setSent(false);
                  }}
                  className="mt-7 rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-[#f4b942] hover:text-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input label="Name" name="name" value={form.name} onChange={change} autoComplete="name" placeholder="Your name" />
                  <Input label="Email" type="email" name="email" value={form.email} onChange={change} autoComplete="email" placeholder="you@example.com" />
                </div>
                <Input label="Subject" name="subject" value={form.subject} onChange={change} placeholder="How can we help?" />
                <Message label="Message" name="message" value={form.message} onChange={change} required placeholder="Write your message" />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#f4b942] px-8 py-4 font-bold text-black transition hover:bg-white sm:ml-auto sm:w-auto"
                >
                  <FiSend /> Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contactus;