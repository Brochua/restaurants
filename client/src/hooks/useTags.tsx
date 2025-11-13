import React, { createContext, useEffect, useState } from "react";

interface TagsType {
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}

export const TagsContext = createContext<TagsType>({} as TagsType);

export function TagsProvider({ children }: { children: React.ReactNode }) {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
        const getTags = async () => {
            const resp = await fetch('/api/tags');
            if (resp.ok) {
                const json = await resp.json();

                const tags: string[] = json.tags;
                setTags(tags);
            }
        };
        getTags();
    }, []);

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
      {children}
    </TagsContext.Provider>
  );
}

