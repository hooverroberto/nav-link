import React, { useState } from "react";

import Alertas from "../todo/Alertas";
import Listas from "../todo/Listas";

function TodoList() {

    const [name, setName] = useState("")
    const [list, setList] = useState([])
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(null)
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

    const handleSubmit = () => { }
    const showAlerta = () => { }
    const removeItem = () => { }
    const editItem= () => { }
    const clearList = () => { }

    return (

        <section className="section-center">
            <form onSubmit={handleSubmit}>
                {alert.show && <Alertas {...alert} removerAlerta={showAlerta} list={list} />}
                <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                    Lista de Tareas
                </h3>
                <div className="mb-3 form d-flex">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Introduce la tarea"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <button type="submit" className="btn btn-success">
                        {editar ? "Editar" : "Enviar"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                    <Listas items={list} removeItem={removeItem} editItem={editItem} />
                    <div>
                        <button className="btn btn-warning" onClick={clearList}>
                            Borrar tareas
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default TodoList;



