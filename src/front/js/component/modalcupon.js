import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Table } from "react-bootstrap";
import { Context } from "../store/appContext";

export function Modal2() {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="btn btn-outline-success float-right" onClick={handleShow} style={{ marginInline: "10px" }}>
				Ver detalles
			</Button>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>
						<a href="https://qrco.de/bc8BH0">
							<img
								src="https://api.qr-code-generator.com/v1/create?access-token=VDQbMtg8gNeNlftKcrwSXn9p8IuapxlileYHxKghNQ5yhGRMNmYw4HOjercdSv9S&frame_name=no-frame&image_format=PNG&image_width=500&qr_code_id=23119307&rnd=1621142329926"
								className="card-img-top"
								alt="..."
							/>
						</a>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Table responsive="sm">
						<thead>
							<tr>
								<th>Presente este cupon al cajero</th>
							</tr>
						</thead>
					</Table>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
