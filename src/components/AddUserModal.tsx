import Modal from "./Modal";
import AddUserForm from "./AddUserForm";

const AddUserModal = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  if (!show) return null;

  return (
    <Modal show={show} onClose={onClose}>
      <h3 className="text-xl font-semibold text-gray-900 py-4 px-8">
        Add User Form
      </h3>
      <AddUserForm onClose={onClose} />
    </Modal>
  );
};

export default AddUserModal;

export {};
