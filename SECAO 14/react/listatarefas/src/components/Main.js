import React, { Component } from "react";

import { FaPlus } from 'react-icons/fa'

import { FaEdit, FaWindowClose } from 'react-icons/fa'


export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'Fazer café',
            'Beber agua'
        ]
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { tarefas } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()

        if (tarefas.indexOf(novaTarefa) !== -1) return

        const novaTarefas = [...tarefas]
        this.setState({
            tarefas: [...novaTarefas, novaTarefa]
        })
    }


    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        })
    }

    handleEdit = (e, index) => {

    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state
        const novaTarefas = [...tarefas]
        novaTarefas.splice(index, 1)

        this.setState(
            {
                tarefas: [...novaTarefas],
            }
        )
    }

    render() {
        const { novaTarefa } = this.state
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input
                        onChange={this.handleChange} type='text'
                        value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefa => (
                        <li>{tarefa}
                            <div>
                                <FaEdit onClick={this.handleEdit} className="edit" />
                                <FaWindowClose onClick={this.handleDelete} className="delete" />
                            </div>
                        </li>

                    ))}

                </ul>
            </div>
        )
    }
}