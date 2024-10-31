import { useState } from 'react';

import { Formulario, TextArea, Button } from './style';

export default function FormTarefa() {
    const [item, setItem] = useState([]);

    function handleChange(e) {
        setItem({...item, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(resp => resp.json())
        .then(data => setItem(data))
        .catch(err => console.log(err));

        setItem({...item, "description": ''});
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <TextArea name="description" placeholder="Descreva o item a ser inserido.." onChange={handleChange} value={item.description}></TextArea>
            <Button>Salvar</Button>
        </Formulario>
    );
}