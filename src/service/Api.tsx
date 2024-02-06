import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";

export interface props {
  id: number;
  title: string;
}
const Api = () => {
  const [users, setUsers] = useState<props[]>([]);
  useEffect(() => {
    axios
      .get<props[]>("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <SimpleGrid column={3} spacing={1}>
      {users.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </SimpleGrid>
  );
};

export default Api;
