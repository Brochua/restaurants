import React, { createContext, useEffect, useState } from "react";

interface CategoriesType {
    categories: string[],
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

export const CategoriesContext = createContext<CategoriesType>({} as CategoriesType);

export function CategoriesProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
        const getCategories = async () => {
            const resp = await fetch('/api/categories');
            if (resp.ok) {
                const json = await resp.json();

                const categories: string[] = json.categories;
                setCategories(categories);
            }
        };
        getCategories();
    }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

