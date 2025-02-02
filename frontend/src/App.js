// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';

function App() {
    const [superheroes, setSuperheroes] = useState([]);

    const API_URL = 'http://localhost:3000';

    const fetchSuperheroes = async () => {
        const response = await fetch(`${API_URL}/superheroes`);
        const data = await response.json();
        setSuperheroes(data);
    };

    useEffect(() => {
        fetchSuperheroes();
    }, []);

    const addSuperhero = async (hero) => {
        const response = await fetch(`${API_URL}/superheroes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(hero),
        });
        if (response.ok) {
            fetchSuperheroes();
        } else {
            const error = await response.json();
            alert('Error: ' + JSON.stringify(error));
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Humble Superheroes</h1>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <SuperheroForm addSuperhero={addSuperhero} />
                </div>
                <div className="col-md-6">
                    <SuperheroList superheroes={superheroes} />
                </div>
            </div>
        </div>
    );
}

export default App;
