import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const api_key = "13832345b924b204e79d85b719bc624f";

export default class WatchTrailer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        console.log(this)
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
                <Button outline color="danger" className="trailer-btn" onClick={this.toggle}>{this.props.buttonLabel} Watch Trailer</Button>
                <Modal className="modal-body" isOpen={this.state.modal} toggle={this.toggle}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="youtube-player" allow="autoplay; encrypted-media" type="text/html" src="http://www.youtube.com/watch_popup?v=2LqzF5WauAw"></iframe>
                    </div>
                </Modal>
            </div>

        );
    }
}

// API link (with id and api_key) --> results --> id --> key
//http://api.themoviedb.org/3/movie/157336/videos?api_key=###