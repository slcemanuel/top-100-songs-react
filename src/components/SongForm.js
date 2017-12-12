import React from 'react';

class SongForm extends React.Component {
  state = { title: '' }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          placeholder="Add a Song"
          required
          value={this.state.title}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default SongForm;
