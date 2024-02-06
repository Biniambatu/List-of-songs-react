import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";

interface prop {
  id: number;
  name: string;
}
const Apii = () => {
  const [genres, setGenres] = useState<prop[]>([]);

  useEffect(() => {
    axios
      .get<prop[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setGenres(res.data));
  }, []);
  return (
    <SimpleGrid spacing={6}>
      {genres.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </SimpleGrid>
  );
};

export default Apii;
