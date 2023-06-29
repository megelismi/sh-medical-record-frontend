import Modal from "./Modal";
import AddUserForm from "./AddUserForm";

const AddUserModal = () => {
  return (
    <Modal onClose={() => console.log("close modal")} show={true}>
      <AddUserForm onCancel={() => console.log("close modal")} />
    </Modal>
  );
};

export default AddUserModal;
