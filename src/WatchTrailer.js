import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


class WatchTrailer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button outline color="danger" className="trailer-btn" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Trailer</ModalHeader>
                    <ModalBody>
                        <iframe class="youtube-player" type="text/html" src="http://www.youtube.com/watch_popup?v=Lv-sY_z8MNs" allowfullscreen frameborder="0"></iframe>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}