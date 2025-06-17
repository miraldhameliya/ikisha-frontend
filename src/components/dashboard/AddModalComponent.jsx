import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React, { createContext, useContext } from "react";

const AddModalContext = createContext();

export function useAddModal() {
  return useContext(AddModalContext);
}

export function AddModalProvider({ children }) {
  const [modalConfig, setModalConfig] = useState({
    section: null,
    onAdd: null,
    open: false,
  });

  const openModal = (section, onAdd) => {
    setModalConfig({ section, onAdd, open: true });
  };

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, open: false }));
  };

  return (
    <AddModalContext.Provider value={{ ...modalConfig, openModal, closeModal }}>
      {children}
    </AddModalContext.Provider>
  );
}

export function CustomAddModal({ section, onSave, isOpen, setIsOpen }) {
  const [value, setValue] = useState("");
  const [price, setPrice] = useState("");

  const sectionMap = {
    "Diamond": {
      label: "Diamond Shape",
      placeholder: "Enter diamond shape",
      button: "Add Diamond Shape",
      modalTitle: "Add Shape"
    },
    "Metal": {
      label: "Metal Type",
      placeholder: "Enter metal type",
      button: "Add Metal Type",
      modalTitle: "Add Metal Type"
    },
    "Category": {
      label: "Category Name",
      placeholder: "Enter category name",
      button: "Add Category",
      modalTitle: "Add Category"
    },
    "Size": {
      label: "Size",
      placeholder: "Enter size",
      button: "Add Size",
      modalTitle: "Add Size"
    },
    "Diamond-clarity": {
      label: "Diamond Clarity Type",
      placeholder: "Enter diamond clarity type",
      button: "Add Diamond-clarity",
      modalTitle: "Add Diamond Clarity"
    },
  };

  const { label, placeholder, modalTitle } = sectionMap[section] || sectionMap["Diamond"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (section === "Size") {
      onSave?.({ size: value, price });
    } else {
      onSave?.(value);
    }
    setValue("");
    setPrice("");
    setIsOpen(false);
  };

  return (
    <>
      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-[#303F26] text-white px-5 py-2 flex items-center gap-3 rounded hover:bg-[#26371e]"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#303F26] text-2xl font-bold">
          +
        </span>
        <span className="font-semibold text-lg leading-none">{button}</span>
      </button> */}

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                <Dialog.Title className="text-lg font-semibold mb-4">{modalTitle}</Dialog.Title>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {section === "Size" ? (
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Size</label>
                        <input
                          type="text"
                          value={value}
                          onChange={e => setValue(e.target.value)}
                          placeholder="Enter size"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#303F26] focus:ring-[#303F26] sm:text-sm"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                          type="text"
                          value={price}
                          onChange={e => setPrice(e.target.value)}
                          placeholder="Enter price"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#303F26] focus:ring-[#303F26] sm:text-sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">{label}</label>
                      <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={placeholder}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#303F26] focus:ring-[#303F26] sm:text-sm"
                      />
                    </div>
                  )}

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 text-sm rounded border border-gray-300 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm rounded bg-[#303F26] text-white hover:bg-[#26371e]"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
