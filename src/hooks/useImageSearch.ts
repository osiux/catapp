import api from "../api";
import { useQuery } from "react-query";

type Image = {
    id: string;
    url: string;
};

const performSearch = async (
    key: string,
    breedId: string | undefined
): Promise<Image[]> =>
    await api
        .get(key, {
            searchParams: {
                breed_id: breedId || "",
                limit: 9,
            },
        })
        .json();

const useImageSearch = (breedId?: string) => {
    return useQuery(["images/search", breedId], performSearch, {
        enabled: !!breedId,
    });
};

export default useImageSearch;
