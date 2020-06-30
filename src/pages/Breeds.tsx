import React from "react";
import TinyFlag from "tiny-flag-react";

import Loading from "../components/Loading";

import useBreeds from "../hooks/useBreeds";

const Breeds = () => {
    const { data, isLoading } = useBreeds();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="row mt-2">
            <div className="col">
                <h1>Breeds</h1>

                {data?.map((breed) => (
                    <div key={breed.id} className="card mb-2">
                        <div className="card-body">
                            <h2 className="card-title">
                                {breed.name}{" "}
                                <TinyFlag
                                    country={breed.country_code}
                                    alt={breed.origin}
                                    fallbackImageURL={`https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${breed.country_code}.svg`}
                                />
                            </h2>
                            <p className="card-text">{breed.description}</p>
                            <p className="card-text">
                                <strong className="font-weight-bold">
                                    Temperament:
                                </strong>{" "}
                                {breed.temperament}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Breeds;
