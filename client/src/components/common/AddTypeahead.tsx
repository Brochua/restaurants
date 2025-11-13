import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from "react";
import TypeaheadDropdown, { TypeaheadOptions } from "./Typeahead";
import '../../styles/AddTypeahead.css';

export default function AddTypeahead({label, options, setOptions}: {label?: string; options: TypeaheadOptions; setOptions: Dispatch<SetStateAction<TypeaheadOptions>>}) {
    const input = useRef<HTMLInputElement>(null);
    const clearSearch = useRef<(() => void) | null>(null);

    const addOption = useCallback(() => {
        if (!input.current) return;

        const value = input.current.value;
        if (!value) return;

        setOptions(old => {
            console.log(old, value)
            const newOptions = structuredClone(old);
            newOptions[value] = true;
            console.log(newOptions)
            return newOptions;
        });
        input.current.value = "";
        clearSearch.current?.();
    }, [setOptions]);

    useEffect(() => {
        if (!input.current) {
            console.warn('Input ref not resolved yet, add item listener will not be registered');
            return;
        }

        const ref = input.current;
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.shiftKey && e.key.toLowerCase() === "enter") {
                addOption();
                e.preventDefault();
                e.stopPropagation();
            }
        }
        ref.addEventListener('keydown', handleKeydown, true)
        return () => ref.removeEventListener('keydown', handleKeydown, true);
    }, [addOption])

    return <div className="add-typeahead-wrapper">
        <TypeaheadDropdown label={label} options={options} setOptions={setOptions} inputRef={input} onClearRef={clearSearch} />
        <button type="button" onClick={addOption} className="add-button">+</button>
    </div>
}