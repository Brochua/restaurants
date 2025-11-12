import { capitalize } from "../../utils";
import '../../styles/Pill.css';

export default function Pill({label, onRemove}: {label: string; onRemove?: (key: string) => void}) {
    return <div label={`${label}-pill`} className="typeahead-pill">
        <span>{capitalize(label)}</span>
        {onRemove && <button type="button" onClick={() => onRemove(label)} className="pill-close">x</button>}
    </div>
}