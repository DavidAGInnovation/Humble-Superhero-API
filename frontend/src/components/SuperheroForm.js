// frontend/src/components/SuperheroForm.js
import React, { useState } from 'react';

function SuperheroForm({ addSuperhero }) {
    const [name, setName] = useState('');
    const [superpower, setSuperpower] = useState('');
    const [humilityScore, setHumilityScore] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        addSuperhero({ name, superpower, humilityScore: Number(humilityScore) });
        setName('');
        setSuperpower('');
        setHumilityScore(1);
    };

    return (
        <div className="card shadow-sm">
            <div className="card-header">Add a New Superhero</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Superhero Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter superhero name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="superpower" className="form-label">Superpower</label>
                        <input
                            type="text"
                            id="superpower"
                            className="form-control"
                            placeholder="Enter superpower"
                            value={superpower}
                            onChange={(e) => setSuperpower(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="humilityScore" className="form-label">Humility Score (1-10)</label>
                        <input
                            type="number"
                            id="humilityScore"
                            className="form-control"
                            placeholder="Enter humility score"
                            value={humilityScore}
                            onChange={(e) => setHumilityScore(e.target.value)}
                            min="1"
                            max="10"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add Superhero</button>
                </form>
            </div>
        </div>
    );
}

export default SuperheroForm;
