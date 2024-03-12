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
        دعاء الصائم قبل الإفطار       
         </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
        اللهم إنك عفو تحب العفو فاعف عني اللهم إنك عفو تحب العفو فاعف عني اللهم إنك عفو تحب العفو فاعف عني.
اللهم ان كثرت ذنوبي فاغفرها وان ظهرت عيوبي فاسترها امين يا رب.

اللهم إنا لا نملك لأهلنا في فلسطين إلا الدعاء".
-" اللهم احفظهم بحفظك وانصرهم واخذل كل من خذلهم"
اللهم انصر ضعفهم وَرُد إلينا المسجد الأقصى ردًا جميلًا"


دعاء الصائم عند الإفطار هو سنة من سنن رسول الله صلى الله عليه وسلم، خاصةً أنه كان إذا أفطر قال: “اللهم لكَ صُمت وعلى رزقك أفطرت، ذهب الظمأ وابتلت العروق وثبت الأجر إن شاء الله”؛ رواه أبو داوود.
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
      <Button style={{background:"none",border:"none", fontSize:"13px"}} onClick={() => setModalShow(true)}>
      دعاء الصائم قبل الإفطار
            </Button>

      {/* Use the MyVerticallyCenteredModal component */}
      <MyVerticallyCenteredModal show={modalShow} onHide={onHide} />
    </div>
  );
}

export default Alert1;
