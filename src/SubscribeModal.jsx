import React from "react";
import { createPortal } from 'react-dom';


class SubscribeModal extends React.Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState( state => ({
      isOpen: !state.isOpen
    }));
  }
  render() {
    return (
      <>
        <button className="modal-toggle-button" onClick={()=>{this.toggle()}}>Subscription conditions</button>
        {
          this.state.isOpen && createPortal(
            <div className="my-modal">
              Conditionsssssss

              <button className="modal-close" onClick={()=>{this.toggle()}}>Close</button>
            </div>,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

export default SubscribeModal;
