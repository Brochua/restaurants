import { useEffect, useState } from "react"

export default function AddRestaurantFields() {
    // State for all form fields
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [notes, setNotes] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [area, setArea] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [website, setWebsite] = useState<string>('')
    const [cuisines, setCuisines] = useState<string[]>([])
    const [categories, setCategories] = useState<string[]>([])

    const submitRestaurant = async (e: React.MouseEvent) => {
        e.preventDefault();
        const restaurantData = {
            name,
            description,
            notes,
            address,
            area,
            phoneNumber,
            website
        }

        try {
            const createResponse = await fetch('/api/restaurants', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    restaurant: restaurantData,
                    cuisines,
                    categories
                })
            })
    
            if (createResponse.ok) {
                alert("Wooo created")
                window.location.reload();
            } else {
                console.error("something went wrong", createResponse)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        const form = document.querySelector('form#create-restaurant') as HTMLFormElement | null
        if (!form) return

        const syncAll = () => {
            const f = new FormData(form)
            setName((f.get('name') as string) ?? '')
            setDescription((f.get('description') as string) ?? '')
            setNotes((f.get('notes') as string) ?? '')
            setAddress((f.get('address') as string) ?? '')
            setArea((f.get('area') as string) ?? '')
            setPhoneNumber((f.get('phoneNumber') as string) ?? '')
            setWebsite((f.get('website') as string) ?? '')

            const cuisinesEl = form.querySelector('select[name="cuisines"]') as HTMLSelectElement | null
            if (cuisinesEl) {
                setCuisines(Array.from(cuisinesEl.selectedOptions).map(o => o.value))
            }

            const categoriesEl = form.querySelector('select[name="categories"]') as HTMLSelectElement | null
            if (categoriesEl) {
                setCategories(Array.from(categoriesEl.selectedOptions).map(o => o.value))
            }
        }

        syncAll()

        const onChange = () => syncAll()
        form.addEventListener('input', onChange)
        form.addEventListener('change', onChange)

        return () => {
            form.removeEventListener('input', onChange)
            form.removeEventListener('change', onChange)
        }
    }, [])

    return <form id='create-restaurant'>
        <fieldset>
            <label htmlFor="name">Name:</label>
            <input required name="name" />
        </fieldset>

        <fieldset>
            <label htmlFor="description">Description:</label>
            <input name="description" />
        </fieldset>

        <fieldset>
            <label htmlFor="notes">Notes:</label>
            <input name="notes" />
        </fieldset>

        <fieldset>
            <label htmlFor="address">Address:</label>
            <input name="address" />
        </fieldset>

        <fieldset>
            <label htmlFor="area">Area:</label>
            <input name="area" />
        </fieldset>

        <fieldset>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input name="phoneNumber" />
        </fieldset>

        <fieldset>
            <label htmlFor="website">Website:</label>
            <input name="website" />
        </fieldset>

        <fieldset>
            <label htmlFor="cuisines">Cuisines:</label>
            <select multiple name="cuisines">
                <option>goon</option>
                <option>goon2</option>
                <option>goon3</option>
                <option>goon4</option>
            </select>
        </fieldset>

        <fieldset>
            <label htmlFor="categories">Categores:</label>
            <select multiple name="categories">
                <option>goonie</option>
                <option>goonie2</option>
                <option>goonie3</option>
                <option>goonie4</option>
            </select>
        </fieldset>

        <button onClick={submitRestaurant}>Create!</button>
    </form>
}