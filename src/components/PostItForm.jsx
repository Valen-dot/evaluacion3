import React, { useState } from "react";
import "./PostIt.css";  
 // esto nos asegura  tener un archivo CSS para estilos//
function PostItForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isImportant, setIsImportant] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return; // Evita que se continúe si falta algún campo//
        }

        onAdd({
            title,
            description,
            isImportant,
        });

        setTitle("");
        setDescription("");
        setIsImportant(false);
    };

    return (
        <form onSubmit={handleSubmit} className="post-it-form">
            <input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descripción (obligatoria)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={isImportant}
                    onChange={(e) => setIsImportant(e.target.checked)}
                />
                ¿Es importante?
            </label>
            <button type="submit">Agregar Post-It</button>
        </form>
    );
}

export default PostItForm;