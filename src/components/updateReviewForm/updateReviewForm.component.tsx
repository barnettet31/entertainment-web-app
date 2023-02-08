import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface IReviewUpdateForm {
    rating:number;
    comment:string;
    isUpdating:boolean;
    setUpdating:(d:boolean)=>void;
}
export const UpdateReviewForm = ({rating,
comment, isUpdating, setUpdating}:IReviewUpdateForm)=>{
    const [isOpen, setIsOpen] = useState(isUpdating);
    const handleSetIsOpen = ()=>{
        setUpdating(false);
        
    }
    return (
      <Dialog
        open={isOpen}
        onClose={() =>handleSetIsOpen()}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto min-w-[300px] rounded-lg bg-semi-dark-blue">
            <Dialog.Title className="text-lg font-medium leading-6 text-white">Edit your review</Dialog.Title>
            <p>{rating}</p>
            <p>{comment}</p>
          </Dialog.Panel>
        </div>
      </Dialog>
    );
}