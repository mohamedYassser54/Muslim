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
        اللَّهمَّ إنِّي أسأَلُكَ مِن الخيرِ كلِّه عاجلِه وآجلِه ما علِمْتُ منه وما لَمْ أعلَمْ وأعوذُ بكَ مِن الشَّرِّ كلِّه عاجلِه وآجلِه ما علِمْتُ منه وما لَمْ أعلَمْ، اللَّهمَّ إنِّي أسأَلُكَ مِن الخيرِ ما سأَلكَ عبدُك ونَبيُّكَ وأعوذُ بكَ مِن الشَّرِّ ما عاذ به عبدُك ونَبيُّكَ وأسأَلُكَ الجنَّةَ وما قرَّب إليها مِن قولٍ وعمَلٍ وأعوذُ بكَ مِن النَّارِ وما قرَّب إليها مِن قولٍ وعمَلٍ وأسأَلُكَ أنْ تجعَلَ كلَّ قضاءٍ قضَيْتَه لي خيرًا        </p>
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
