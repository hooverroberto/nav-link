import React, { useState } from "react";


function Todo() {

    const [tareas, setTareas] = useState("");
    const [items, setItems] = useState([]);
    const [editarTareas, setEditarTareas] = useState(-1);
    const [actualizarTexto, setActulizarTexto] = useState("")

    function agregarTarea() {

        if (!tareas) {
            alert("Introducir una tarea!!!");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 100),
            value: tareas
        };

        setItems(list => [...list, item])
        setTareas("");

        // console.log(tareas);

    }

    function borrarTarea(id) {
        console.log(id);
        const arreglo = items.filter(item => item.id !== id);
        setItems(arreglo)
    }
    

     function editTareas(id, nuevoTexto) {
        const currentItem = items.filter((item) => item.id === id);

        // Create a new item with same id
        const newItem = {
            id: currentItem.id,
            value: nuevoTexto,
        };

        borrarTarea(id);

        // Replace item in the item list
        setItems((oldList) => [...oldList, newItem]);
        setActulizarTexto("");
        setEditarTareas(-1);
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card w-50 border-0">
                <h1>Lista de Tareas</h1>

                <div className="input-group d-flex justify-content-center mt-5">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Agregar tareas..."
                        value={tareas}
                        onChange={(e) => setTareas(e.target.value)}
                    />
                    <button class="btn btn-primary" onClick={() => agregarTarea()}>Agregar</button>
                </div>


                <ul class="list-group w-100 mt-5">
                    {items.map((item) => {
                        return (

                            <div class="card-body ">
                                <li class="list-group-item d-flex justify-content-between text-primary" key={item.id} onClick={() => setEditarTareas(item.id)}>
                                    {item.value}
                                    <div className="d-flex">
                                        <button className="btn d-flex align-items-center" onClick={() => borrarTarea(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="red" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                {editarTareas === item.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={actualizarTexto}
                                            onChange={(e) => setActulizarTexto(e.target.value)}
                                        />

                                        <button className="btn d-flex align-items-center" onClick={() => editTareas(item.id, actualizarTexto)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="green" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : null}
                            </div>

                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Todo;



