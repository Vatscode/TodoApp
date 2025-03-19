// CreateTodo.jsx
import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your fetch logic...
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(async function(res) {
            const json = await res.json();
            alert("Todo added");
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id="title"
                    style={{ padding: 10, margin: 10 }}
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    id="desc"
                    style={{ padding: 10, margin: 10 }}
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <button
                    style={{ padding: 10, margin: 10 }}
                    type="submit"
                >
                    Add a todo
                </button>
            </form>
        </div>
    );
}

export default CreateTodo; // Default export if needed, or you can just keep the named export
