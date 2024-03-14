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
        اللهم يا رازق السائلين، يا راحم المساكين، ويا ذا القوة المتين، ويا خير الناصرين، يا وليّ المؤمنين، يا غيّاث المستغيثين، إياك نعبدوإيّاك نستعين، اللهم إني أسألك رزقاً واسعاً طيباً من رزقك. اللهم إني أسألك فهم النبيين، وحفظ المرسلين والملائكة المقربين، اللهم اجعل ألسنتنا عامرة بذكرك، وقلوبنا بخشيتك، وأسرارنا بطاعتك، إنك على كل شيء قدير، حسبنا الله ونعم الوكيل».
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
      دعاء اليوم
      </Button>

      {/* Use the MyVerticallyCenteredModal component */}
      <MyVerticallyCenteredModal show={modalShow} onHide={onHide} />
    </div>
  );
}

export default Alert1;
