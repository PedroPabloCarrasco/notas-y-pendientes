import React, { Component } from 'react';

class App extends Component {
  state = {
    list: []
  };

  agregar = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const id = Math.random().toString(16);
    const pendiente = { text, id };
    this.setState(state => ({
      list: [
        ...state.list,
        pendiente
      ]
    }));
  };

  render() {
    return (
      <div>
        <h3>ShouldComponentUpdate</h3>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder='Ingresa tu tarea' />
          <button>
            Agregar
          </button>
        </form>
        <div>
          {this.state.list.map(item => (
            <div key={item.id}>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
