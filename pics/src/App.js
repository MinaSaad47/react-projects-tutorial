import { useState } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import { searchImages } from "./api";

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const results = await searchImages(term);
        setImages(results);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;