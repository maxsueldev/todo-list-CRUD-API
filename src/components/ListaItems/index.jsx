import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Item } from './style';

export default function ListaItems({ editItem }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
    }, [items]);

    function removeItem(id) {
        fetch(`http://localhost:5000/items/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
        .then(setItems(items.filter(item => item.id !== id)))
        .catch(err=> console.log(err));
    }

    return (
        <ul>
            {items.map(item => (
                <Item key={item.id}>
                    {item.description}
                    <div>
                        <FaEdit onClick={() => editItem(item.id)} />
                        <MdDelete onClick={() => removeItem(item.id)} />
                     </div>
                </Item>
            ))}
        </ul>
    );
}