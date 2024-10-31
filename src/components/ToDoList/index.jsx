import FormTarefa from '../FormTarefa';
import ListaItems from '../ListaItems';

import { Container } from './style';

export default function ToDoList() {
    function editItem(id) {
        
    }

    return (
        <Container>
            <h1>Lista de tarefas</h1>
            <FormTarefa />
            <ListaItems editItem={editItem} />
        </Container>
    );
}