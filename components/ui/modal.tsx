"use client"

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "./dialog";

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode
}

const Modal = ({title, description, isOpen, onClose, children}: ModalProps) =>  {
    const onchange = (open: boolean) => {
        if(!open){
            onClose()
        }
    }
return (
    <Dialog open={isOpen} onOpenChange={onchange}>
        <DialogContent className="bg-white rounded p-6 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <DialogHeader>
                <DialogTitle className="font-bold">
                    {title}
                </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            <div>{children}</div>
        </DialogContent>
    </Dialog>
)
}

export default Modal