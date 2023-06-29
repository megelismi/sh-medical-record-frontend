const Modal = ({
  children,
  show,
  onClose,
}: {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}) => {
  if (!show) return null;

  // We only want to close the modal if the user clicks _outside_
  // of it. If they click inside of the modal, it should not close.
  const handleClose = (e: React.MouseEvent) => {
    // @ts-ignore - there is a target property on this mouse event
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={(event) => handleClose(event)}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[600px] flex flex-col">
        <div className="bg-white rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
