import React, { useState } from "react";

function Notas() {
    // State Hook - `useState`
    const [notas, setNotas] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {

        if (!notas) {
            alert("Introduce la nota");
            return;
        }
        const item = {
            id: Math.floor(Math.random() * 100),
            value: notas,
        };

        setItems((oldList) => [...oldList, item]);
        setNotas("");
    }


    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    return (
        <div className="container card mt-5 border-0" style={{ width: 600 }}>

            <h1>Notas</h1>
            <div>
                <input
                    type="text"
                    placeholder="Agregar una nota ..."
                    className="mt-3"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                />
                <button onClick={() => addItem()} className="bg-primary text-white">Agregar</button>
            </div>

            <div className="mt-5">
                <ul className="list-group">
                    {items.map((item) => {
                        return (
                            <div className="">
                                <li className="list-group-item d-flex justify-content-between" key={item.id}>
                                    {item.value}
                                    <button
                                        className="border-0 bg-transparent"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="red" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </button>
                                </li>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Notas;