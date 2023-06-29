const Modal = ({
  onClose,
  show,
  children,
}: {
  onClose: () => void;
  show: boolean;
  children: React.ReactNode;
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={onClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal;
