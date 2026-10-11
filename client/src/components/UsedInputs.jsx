

import React, { useId, useState } from "react";

import { FaEye, FaEyeSlash, FaPlay } from "react-icons/fa";

const field =
    "mt-2 w-full rounded-xl bg-[#0d0a12] px-4 py-3.5 text-sm text-white ring-1 ring-white/10 placeholder:text-[#a79fb5] transition focus:outline-none focus:ring-2 focus:ring-[#f4b942]";
const labelClass = "text-sm font-medium text-white";

// `bg` is accepted so your old <Input bg /> calls keep working.
export const Input = ({ label, id, type = "text", bg, ...rest }) => {
    const autoId = useId();
    const inputId = id || autoId;
    const [show, setShow] = useState(false);
    const isPassword = type.trim() === "password";

    return (
        <div className="w-full">
            <label htmlFor={inputId} className={labelClass}>{label}</label>
            <div className="relative">
                <input
                    id={inputId}
                    type={isPassword && show ? "text" : type.trim()}
                    required
                    className={`${field} ${isPassword ? "pr-12" : ""}`}
                    {...rest}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShow((s) => !s)}
                        aria-label={show ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-[#a79fb5] transition hover:text-white"
                    >
                        {show ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>
        </div>
    );
};

export const Message = ({ label, id, ...rest }) => {
    const autoId = useId();
    const areaId = id || autoId;
    return (
        <div className="w-full">
            <label htmlFor={areaId} className={labelClass}>{label}</label>
            <textarea id={areaId} rows={5} className={`${field} resize-none`} {...rest} />
        </div>
    );
};

export const Select = ({ label, id, options, onChange }) => {
    const autoId = useId();
    const selectId = id || autoId;
    return (
        <div className="w-full">
            <label htmlFor={selectId} className={labelClass}>{label}</label>
            <select id={selectId} onChange={onChange} className={field}>
                {options.map((o, i) => (
                    <option key={i} value={o.value}>{o.title}</option>
                ))}
            </select>
        </div>
    );
};

// Shared shell for Login and Register: poster panel on the left, form on the right.
export const AuthCard = ({ title, subtitle, image = "/images/2a.jpg", children, footer }) => (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 lg:py-20">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#17121f] ring-1 ring-white/10 lg:grid-cols-2">
            <div className="relative hidden min-h-[560px] lg:block">
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a12] via-[#0d0a12]/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-10">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#f4b942] text-black">
                        <FaPlay className="ml-0.5 text-sm" />
                    </span>
                    <p className="cv-display mt-5 text-3xl font-extrabold leading-tight text-white">
                        Your next favorite film is one tap away.
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
                <h1 className="cv-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
                <p className="mt-2 text-[#a79fb5]">{subtitle}</p>
                {children}
                <p className="mt-6 text-center text-sm text-[#a79fb5]">{footer}</p>
            </div>
        </div>
    </div>
);