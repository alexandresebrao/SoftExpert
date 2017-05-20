import React, { Component } from 'react';
import Modal from 'react-modal';

class ModalError extends Component {
  render() {
    return(
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.props.closeModal}
        contentLabel="Example Modal"
        >

        <h2 ref={subtitle => this.subtitle = subtitle}>Error</h2>
        <div className="spacer20"></div>
        <div>O campo texto para adicionar um ToDo não pode estar em branco</div>
        <div className="spacer20"></div>
        <button onClick={this.props.handleCloseModal} className="btn btn-danger">Fechar</button>

      </Modal>
    )
  }
}

export default ModalError;
