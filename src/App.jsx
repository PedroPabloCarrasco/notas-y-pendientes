import React, { Component } from 'react';

const itemStyles = {
  padding: '1em',
  borderBottom: '1px solid #CCC',
  marginTop: '0.4em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

class App extends Component {
  state = {
    list: []
  };

  agregar = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    if (text.trim() === '') return;  // Evita agregar tareas vacías
    const id = Math.random().toString(16).slice(2);
    const pendiente = { text, id };
    this.setState(state => ({
      list: [
        ...state.list,
        pendiente
      ]
    }));
    e.target[0].value = '';
  };

  eliminar = (id) => {
    this.setState(state => ({
      list: state.list.filter(item => item.id !== id)
    }));
  };

  render() {
    return (
      <div>
        <h3>Lista de Tareas</h3>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder='Ingresa tu tarea' />
          <button type="submit">
            Agregar
          </button>
        </form>
        <div>
          {this.state.list.map(item => (
            <div key={item.id} style={itemStyles}>
              <span>{item.text}</span>
              <button onClick={() => this.eliminar(item.id)}>
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
