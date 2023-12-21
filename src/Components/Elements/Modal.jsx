import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Logo from "../../assets/satpam-logo.svg";
import Checklist from "../../assets/Checklist.svg";
import Pay from "./Pay";
import Enter from "./Enter";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // Tambahkan variabel status modal
  const [successModalOpen, setSuccessModalOpen] = useState(false); // State for SuccessModal
  const [balanceModalOpen, setBalanceModalOpen] = useState(false); // State for BalanceModal

  const closeModal = () => {
    setIsOpen(false);
    setModalType(""); // Setel tipe modal kembali ke nilai awal
    setSuccessModalOpen(false);
    setBalanceModalOpen(false);
  };

  const openModal = (type) => {
    setIsOpen(true);
    setModalType(type); // Setel tipe modal sesuai dengan jenis yang akan ditampilkan
  };

  const handleSubmit = () => {
    // Tutup modal saat ini
    setIsOpen(false);

    // Buka modal berikutnya berdasarkan tipe modal sebelumnya
    if (modalType === "enter") {
      setSuccessModalOpen(true);
    } else if (modalType === "pay") {
      setBalanceModalOpen(true);
    }
  };

  // Fungsi untuk memilih komponen modal yang akan ditampilkan berdasarkan tipe
  const renderModalContent = () => {
    switch (modalType) {
      case "enter":
        return <Enter />;
      case "pay":
        return <Pay />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={() => openModal("enter")} // Mengatur tipe modal "enter" saat tombol "Masuk" diklik
          className="bg-[#FFCD4B] text-white font-bold font-manrope ml-12 sm:ml-3 py-2 px-[60px] mb-4 rounded-xl hover:bg-black"
        >
          Masuk
        </button>
      </div>
      <div className="">
        <button
          type="button"
          onClick={() => openModal("pay")} // Mengatur tipe modal "pay" saat tombol "Bayar" diklik
          className="bg-[#2E4374] text-white font-bold font-manrope ml-12 sm:ml-3 py-2 px-16 rounded-xl hover:bg-black"
        >
          Bayar
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="flex justify-center mb-5">
                    <img src={Logo} alt="Logo" />
                  </Dialog.Title>
                  <div className="mt-2">
                    {/* Menampilkan konten modal berdasarkan tipe */}
                    {renderModalContent()}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal Success */}
      <Transition appear show={successModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setSuccessModalOpen(false)}
        >
          {/* ... konten SuccessModal ... */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="flex justify-center mb-5">
                    <img src={Logo} alt="Logo" />
                  </Dialog.Title>
                  <div className="mt-2 flex justify-center pl-4">
                    <img src={Checklist} alt="Checklist" />
                  </div>

                  <div className="mb-5 flex justify-center">
                    <h2 className="font-bold text-[#2E4374] text-xl text-center font-manrope">
                      Welcome to the parking area!<br></br> Entry successful!
                    </h2>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Modal Balance */}
      <Transition appear show={balanceModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setBalanceModalOpen(false)}
        >
          {/* ... konten BalanceModal ... */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="flex justify-center mb-5">
                    <img src={Logo} alt="Logo" />
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
