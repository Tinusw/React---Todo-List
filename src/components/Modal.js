import React from 'react';
import Portal from 'react-portal';
import AddTodo from '../containers/AddTodo'


export class Modal extends React.Component {

  render() {
    const button1 = <button >Add Todo</button>;
    return (
      <Portal closeOnEsc openByClickOn ={button1}>
        <PseudoModal>
          <AddTodo />
        </PseudoModal>
      </Portal>
    );
  }

}

export class PseudoModal extends React.Component {

  render() {
    return (
      <div className='panel panel-default text-center'>
        {this.props.children}
        <p><button onClick={this.props.closePortal}>Close this</button></p>
      </div>
    );
  }
}
