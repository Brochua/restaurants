import { Dispatch, SetStateAction, useRef } from "react";
import TypeaheadDropdown, { TypeaheadOptions } from "../list/Typeahead";

export default function AddTypeahead({label, options, setOptions}: {label: string; options: TypeaheadOptions; setOptions: Dispatch<SetStateAction<TypeaheadOptions>>}) {
    const input = useRef<HTMLInputElement>(null);

    const addOption = () => {
        if (!input.current) return;

        const value = input.current.value;
        if (!value) return;

        setOptions(old => {
            const newOptions = structuredClone(old);
            newOptions[value] = true;
            return newOptions;
        });
    }

    return <span className="">
        <TypeaheadDropdown label={label} options={options} setOptions={setOptions} inputRef={input} />
        <button onClick={addOption} className="">+</button>
    </span>
}