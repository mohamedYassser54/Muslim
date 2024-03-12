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
        "اَللّهُمَّ اجْعَل لى نَصيباً مِنْ كُلِّ خَيْرٍ تُنْزِلُ فيهِ، بِجُودكَ يا أجْوَدَ اْلأَجْوَدينَ وأذِقْنى فيهِ حَلاوَةَ ذِكْرِكَ، وأَدآءِ شُكْرِكَ وَاحْفَظْنى فيهِ بِحِفْظِكَ يا أرْحَمَ الرّاحِمينَ اَللّهُمَّ اجْعَلْنى فيهِ مِنَ عبادِكَ الصّالحينَ القانتين المُسْتَغْفِرينَ الْمُقَرَّبينَ اَللّهُمَّ اجْعَلْنى فيهِ مِنَ الْمُتَوَكِّلينَ عَلَيْكَ الفائِزينَ لَدَيْكَ الْمُقَرَّبينَ إليك وزَحْزِحْنى فيهِ عنْ مُوجِباتِ سَخَطِكَ اَللّهُمَّ أعِنّى على صِيامِه وقِيامِهِ بِتَوْفيقِكَ يا هادِى المُضِلّينَ.
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
