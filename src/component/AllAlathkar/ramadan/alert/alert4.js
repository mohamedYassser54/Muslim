import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Define the MyVerticallyCenteredModal component
const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" style={{color:"#500c7f"}}>
        دعاء اليوم
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>

        اللهم أعني على ذكرك، وشكرك، وحسن عبادتك

اﻟلهَم اعتِق رِقابَنا ورِقاب آبائِنا مِن النّار.

اﻟلهَم انِك عفُو تحِب اﻟعفْو فاعْفُ عَنّا.

اللَّهُمَّ بلغنا ليلة القدر ولا تحرمنا نورها وبركتها وأجرها، واجعل لنا فيها دعاءً لا يُرد وافتح لنا بابًا إلى الجنة لا يُسد
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{background:"#500c7f",border:"none"}}>غلق</Button>
      </Modal.Footer>
    </Modal>
  );
};

// Define the Alert1 component
function Alert1() {
  const [modalShow, setModalShow] = useState(false);

  // Define the onHide function
  const onHide = () => {
    setModalShow(false);
  };

  return (
    <div>
      <Button style={{background:"none",border:"none"}} onClick={() => setModalShow(true)}>
      ذكر اليوم
      </Button>

      {/* Use the MyVerticallyCenteredModal component */}
      <MyVerticallyCenteredModal show={modalShow} onHide={onHide} />
    </div>
  );
}

export default Alert1;
