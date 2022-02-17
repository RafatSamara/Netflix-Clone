import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function ModalMovie(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton><Modal.Title>{props.chosenMovie.title}</Modal.Title></Modal.Header>
            <Modal.Body>{props.chosenMovie.overview}</Modal.Body>
            <Modal.Footer>
                <Form>
                    <Form.Group> 
                        <Form.Control type="text" placeholder="Add Your Comment" />
                        <Form.Text></Form.Text>
                        <br></br>
                        <Button name='submit' type="submit">Post</Button>
                        <Button onClick={props.handleClose}>Close</Button>
                    </Form.Group>
                </Form>
            </Modal.Footer>
        </Modal>
    );
}