import api from "../api";
import { useQuery } from "react-query";

// Incomplete type, only typing what I need
export type Breed = {
    id: string;
    name: string;
    description: string;
    origin: string;
    country_code: string;
    temperament: string;
};

const fetchBreeds = async (): Promise<Breed[]> =>
    await api.get("breeds").json();

const useBreeds = () => {
    return useQuery("breeds", fetchBreeds);
};

export default useBreeds;
