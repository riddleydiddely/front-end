import React, { ReactElement, PropsWithChildren } from 'react'
import { Fragment } from 'react';

type ModalProps = {
    isVisible: boolean,
    closeModal: Function
};

export const Modal = (props: PropsWithChildren<ModalProps>): ReactElement => {

    if (!props.isVisible) {
        return <Fragment></Fragment>
    }

    return (
        <div className='modal'>
            <div className=' w-3/5 h-auto'>

                <div className='modal-box'>
                   {props.children}
                    <div className='text-right p-5'>
                    <button className='text-white rounded-lg px-2 py-1 bg-gray-400 hover:bg-main-green' onClick={() => { props.closeModal(false) }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal