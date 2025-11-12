import { useState, useRef, useEffect, KeyboardEvent, useMemo } from "react";
import { capitalize } from "../../utils";
import '../../styles/Typeahead.css';

export type TypeaheadOptions = {[key: string]: boolean}

export default function TypeaheadDropdown({label, options, setOptions, inputRef}: {label: string, options: TypeaheadOptions, setOptions: React.Dispatch<React.SetStateAction<TypeaheadOptions>>, inputRef?: React.RefObject<HTMLInputElement | null>}) {
    const wrapperRef = useRef<HTMLDivElement|null>(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredOptions = useMemo(() => {
        return (Object.keys(options) as string[]).filter(o => o.includes(searchQuery.toLowerCase()))
    }, [searchQuery, options])

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!wrapperRef.current || !e.target) return;
            if (!wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleOption = (key: string) => {
        setOptions(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === "escape") {
            setOpen(false);
        }
        if (e.key.toLowerCase() === "enter" && filteredOptions.length > 0) {
            const key = filteredOptions[0];
            setOptions(prev => ({ ...prev, [key]: !prev[key] }));
        }
    }

    return <div className="typeahead-wrapper" ref={wrapperRef}>
        <label htmlFor={`${label}-search-box`} className="typeahead-search-label">{label}</label>
        <input ref={inputRef} name={`${label}-search-box`} className="typeahead-search" onChange={(e) => {setSearchQuery(e.target.value)}} onKeyDown={handleKeyDown} onFocus={() => setOpen(true)} />
        <ul className="typeahead-options" style={{display: open ? "block" : "none"}}>
            {filteredOptions.map(o => {
                return <li className="typeahead-option" key={`${o}-option`} onClick={() => toggleOption(o)}>
                    <input name={o} type="checkbox" checked={options[o]} readOnly /><label htmlFor={o}>{capitalize(o)}</label>
                </li>
            })}
        </ul>
    </div>
}