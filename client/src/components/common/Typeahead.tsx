import { useState, useRef, useEffect, KeyboardEvent, useMemo } from "react";
import { capitalize } from "../../utils";
import '../../styles/Typeahead.css';
import Pill from "./Pill";

export type TypeaheadOptions = {[key: string]: boolean}

const MAX_PILLS = 2;

export default function TypeaheadDropdown({label, options, setOptions, inputRef}: {label?: string, options: TypeaheadOptions, setOptions: React.Dispatch<React.SetStateAction<TypeaheadOptions>>, inputRef?: React.RefObject<HTMLInputElement | null>}) {
    const wrapperRef = useRef<HTMLDivElement|null>(null);
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredOptions = useMemo(() => {
        return (Object.keys(options) as string[]).filter(o => o.includes(searchQuery.toLowerCase()))
    }, [searchQuery, options])

    const [displayedPills, leftover] = useMemo(() => {
        const selected = Object.keys(options).filter(key => options[key]);
        return [selected.slice(0, 2), selected.length > MAX_PILLS];
    }, [options]);

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
        if (e.key.toLowerCase() === "enter") {
            e.preventDefault();
            if (filteredOptions.length > 0) {
                const key = filteredOptions[0];
                setOptions(prev => ({ ...prev, [key]: !prev[key] }));
            }
        }
    }

    const removePill = (key: string) => {
        setOptions(prev => ({ ...prev, [key]: false }));
    };
    
    return <div className="typeahead-wrapper" ref={wrapperRef}>
        {label && <label htmlFor={`${label}-search-box`} className="typeahead-search-label">{label}</label>}
        <div className="typeahead-input-container">
            <div className="typeahead-pills">
                {displayedPills.map(option => <Pill label={option} onRemove={removePill} />)}
                {leftover && <Pill label={"..."} />}
            </div>
            <input ref={inputRef} name={label ? `${label}-search-box` : undefined} className="typeahead-search" onChange={(e) => {setSearchQuery(e.target.value)}} onKeyDown={handleKeyDown} onFocus={() => setOpen(true)} placeholder="Search..." />
        </div>
        <ul className="typeahead-options" style={{display: open ? "block" : "none"}}>
            {filteredOptions.map(o => {
                return <li className="typeahead-option" label={`${o}-option`} onClick={() => toggleOption(o)}>
                    <input name={o} type="checkbox" checked={options[o]} readOnly /><label htmlFor={o}>{capitalize(o)}</label>
                </li>
            })}
        </ul>
    </div>
}