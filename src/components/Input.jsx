import { useEffect, useRef, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
      inputRef.current.focus();
    } else if (type === "password") {
      setInputType("password");
      inputRef.current.focus();
    }
  }, [show, type]);

  return (
    <label className="relative flex bg-zinc-100 border rounded-sm focus-within:border-gray-400">
      <input
        ref={inputRef}
        required={true}
        type={inputType}
        className="text-xs px-2 w-full outline-none  h-[38px] valid:pt-[10px] peer"
        {...props}
      />
      <small className="absolute top-1/2 left-[10px] -translate-y-1/2 text-xs pointer-events-none cursor-text text-gray-400 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {type === "password" && props?.value && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="h-full flex items-center font-semibold text-sm pr-2"
        >
          {show ? "Gizle" : "Göster"}
        </button>
      )}
    </label>
  );
}
