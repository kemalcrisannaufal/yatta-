import { ReactNode } from "react";
import { FaX } from "react-icons/fa6";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";

interface Proptypes {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  title: string;
}

const Modal = ({ children, onClose, isOpen, title }: Proptypes) => {
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-50 fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-xs px-4 w-full h-screen"
            onClick={handleOutsideClick}
          >
            <div
              className={
                "relative bg-secondary p-4 border border-gray-700 rounded-lg w-full md:w-[500px]"
              }
            >
              <div className="flex justify-between items-center mb-4">
                {title && <h3 className="font-semibold text-xl">{title}</h3>}
                <Button
                  onClick={onClose}
                  className="hover:bg-gray-700 p-1 rounded-full transition-colors"
                  aria-label="close modal"
                >
                  <FaX className="text-sm" />
                </Button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto hide-scrollbar">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
