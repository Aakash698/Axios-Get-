import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class AxiosGet extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => {
                let data = response && response.data;
                this.setState({
                    todos: data,
                });
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.todos.id);
        let displayData = this.state.todos.map((todo) => {
            return (
                <tr>
                    <td>{todo.id}</td>
                    <td id="title">{todo.title}</td>
                    <td className={
                        todo.completed === true ? "taskcompleted" : "taskincomplete"}>
                        {todo.completed === true ? <p className='true'>Completed</p> : <p className='false'>Incompleted</p>}
                    </td>
                </tr>
            );
        });
        return (
            <div className='main'>
                <Table variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default AxiosGet;