import React, { Fragment, useState, useMemo } from "react";

import Loading from "../components/Loading";

import { Breed } from "../hooks/useBreeds";

import { useBreeds, useImageSearch } from "../hooks";

const Home = () => {
    const [breedId, setBreedId] = useState<string | undefined>();

    const { data: breeds } = useBreeds();
    const { data, isLoading, isSuccess } = useImageSearch(breedId);

    const countries = useMemo(
        () =>
            breeds
                ?.reduce<string[]>((acc, item) => {
                    if (!acc.includes(item.origin)) {
                        acc.push(item.origin);
                    }

                    return acc;
                }, [])
                .sort(),
        [breeds]
    );

    const groupedBreeds = useMemo(() => {
        return breeds?.reduce<{ [key: string]: Breed[] }>((acc, item) => {
            if (!acc[item.origin]) {
                acc[item.origin] = [item];
            } else {
                acc[item.origin].push(item);
            }

            return acc;
        }, {});
    }, [breeds]);

    return (
        <Fragment>
            <div className="row">
                <div className="col mt-2 mb-3">
                    <h1>Image Search</h1>
                    <select
                        className="form-control"
                        name="breedId"
                        onChange={(e) => setBreedId(e.target.value)}
                    >
                        <option value="">Select One</option>
                        {countries?.map((country) => (
                            <optgroup key={country} label={country}>
                                {groupedBreeds &&
                                    groupedBreeds[country].map((breed) => (
                                        <option key={breed.id} value={breed.id}>
                                            {breed.name}
                                        </option>
                                    ))}
                            </optgroup>
                        ))}
                    </select>
                </div>
            </div>
            {isLoading && <Loading />}
            {isSuccess && (
                <div className="row">
                    {data?.map((image) => (
                        <div key={image.id} className="col col-md-3 mb-3">
                            <img className="img-fluid" src={image.url} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </Fragment>
    );
};

export default Home;
