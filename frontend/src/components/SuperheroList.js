import React from 'react';

function SuperheroList({ superheroes }) {
    if (superheroes.length === 0) {
        return <p className="text-center">No superheroes added yet.</p>;
    }

    return (
        <div>
            <h2 className="mb-3">Superhero List</h2>
            {superheroes.map((hero) => (
                <div key={hero.id} className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">{hero.name}</h5>
                        <p className="card-text">
                            <strong>Superpower:</strong> {hero.superpower}<br />
                            <strong>Humility Score:</strong> {hero.humilityScore}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SuperheroList;
