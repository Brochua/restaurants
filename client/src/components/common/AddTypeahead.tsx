import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react";
import TypeaheadDropdown, { TypeaheadOptions } from "./Typeahead";
import '../../styles/AddTypeahead.css';

export default function AddTypeahead({label, options, setOptions}: {label?: string; options: TypeaheadOptions; setOptions: Dispatch<SetStateAction<TypeaheadOptions>>}) {
    const input = useRef<HTMLInputElement>(null);

    const addOption = useCallback(() => { // FIGURE OUT HOW TO MAKE RESETTING input.value affect the search bar..
        if (!input.current) return;

        const value = input.current.value;
        if (!value) return;

        setOptions(old => {
            const newOptions = structuredClone(old);
            newOptions[value] = true;
            return newOptions;
        });
        input.current.value = "";
    }, [setOptions])

    useEffect(() => {
        if (!input.current) {
            console.warn('Input ref not resolved yet, add item listener will not be registered');
            return;
        }

        const ref = input.current;
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.shiftKey && e.key.toLowerCase() === "enter") {
                addOption();
            }
        }
        ref.addEventListener('keydown', handleKeydown)
        return () => ref.removeEventListener('keydown', handleKeydown);
    }, [addOption])

    return <div className="add-typeahead-wrapper">
        <TypeaheadDropdown label={label} options={options} setOptions={setOptions} inputRef={input} />
        <button type="button" onClick={addOption} className="add-button">+</button>
    </div>
}