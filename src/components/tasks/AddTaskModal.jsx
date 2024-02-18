import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Codecraft Team">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quisquam
        eum tenetur autem commodi sed expedita sint a nobis obcaecati.
      </p>
    </Modal>
  );
};

export default AddTaskModal;
