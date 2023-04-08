const Modal = (props) => {
  return (
    <div className={"modal" + (props.opened ? " modal-open" : "")}>
      <div className="modal-box p-0 overflow-visible">
        <div className="indicator inline w-full">
          <div className="indicator-item z-auto">
            <button onClick={props.onCloseModal} className="btn btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="p-6">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;