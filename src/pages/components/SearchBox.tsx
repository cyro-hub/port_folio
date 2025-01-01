import debounce from "@/utils/debounce";
import { Cancel01Icon, Search01Icon } from "hugeicons-react";
import { useCallback, useEffect, useState } from "react";

interface SearchBoxProps {
  submit: (query: string) => void;
}

function SearchBox({ submit }: SearchBoxProps) {
  const [description, setDescription] = useState<string>("");
  const [debouncedDescription, setDebouncedDescription] = useState(description);

  const debouncedUpdate = useCallback(
    debounce((value: string) => setDebouncedDescription(value), 500),
    []
  );

  useEffect(() => {
    debouncedUpdate(description.trim());
  }, [description, debouncedUpdate]);

  useEffect(() => {
    // if (debouncedDescription) {
    submit(debouncedDescription);
    // }
  }, [debouncedDescription]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      submit(debouncedDescription);
    }
  }

  return (
    <div className="select-none px-4 py-2 h-12 border border-white/15 gap-2 rounded-[12px] w-full flex justify-center items-center transition-colors duration-300 focus-within:bg-white/5">
      <Search01Icon size={18} className="mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="border-none bg-transparent w-full outline-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {description && ( // Show clear icon only when there's text in the input
        <Cancel01Icon
          size={12}
          className="ml-2 cursor-pointer"
          onClick={() => setDescription("")}
        />
      )}
    </div>
  );
}

export default SearchBox;
