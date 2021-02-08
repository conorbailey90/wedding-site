const RSVPModal = (props) =>{

 

    return (
        <div className={props.className}>
            <div className="modal-inner">
                <div><p>Thanks {props.name}! We're looking for to sharing our special day avec vous!</p></div>
                <div><p className="close-modal" onClick={props.closeModal}>Close</p></div>
            </div>
        </div>
    )
}

export default RSVPModal;