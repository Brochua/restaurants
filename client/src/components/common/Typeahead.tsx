import { useState, useRef, useEffect, KeyboardEvent, useMemo } from "react";
import { capitalize } from "../../utils";
import '../../styles/Typeahead.css';
import Pill from "./Pill";

export type TypeaheadOptions = {[key: string]: boolean}

const MAX_PILLS = 2;

export default function TypeaheadDropdown({label, options, setOptions, inputRef, onClearRef}: {label?: string, options: TypeaheadOptions, setOptions: React.Dispatch<React.SetStateAction<TypeaheadOptions>>, inputRef?: React.RefObject<HTMLInputElement | null>, onClearRef?: React.RefObject<(() => void) | null>}) {
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

    const [isAllSelected, selectAll] = useMemo(() => {
        const allSelected = Object.entries(options).filter(([k,]) => filteredOptions.includes(k)).every(([, v]) => v === true);
        const selectAll = () => {
            const newOptions = structuredClone(options);
            filteredOptions.forEach(key => {
                newOptions[key] = !allSelected;
            });
            setOptions(newOptions);
        }
        return [allSelected, selectAll];
    }, [setOptions, filteredOptions, options])

    const removePill = (key: string) => {
        setOptions(prev => ({ ...prev, [key]: false }));
    };
    
    useEffect(() => {
        if (onClearRef) {
            onClearRef.current = () => {
                console.log("RESETTING")
                setSearchQuery("")
            };
        }
    }, [onClearRef]);
    
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
            <li className="typeahead-option" onClick={selectAll}>
                <input name="select-all" type="checkbox" checked={isAllSelected} readOnly /><label htmlFor="select-all">Select All</label>
            </li>
            {filteredOptions.map(o => (
                <li key={`option-${o}`} className="typeahead-option" onClick={() => toggleOption(o)}>
                    <input name={o} type="checkbox" checked={options[o]} readOnly /><label htmlFor={o}>{capitalize(o)}</label>
                </li>
            ))}
        </ul>
    </div>
}