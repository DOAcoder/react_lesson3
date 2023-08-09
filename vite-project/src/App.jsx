import { ToastContainer, toast } from "react-toastify";
import List from "./components/UI/List";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const [contacts, setContacts] = useState([]);

  return (
    <div className="relative">
      {openModal === true && (
        <Modal
          contacts={contacts}
          setContacts={setContacts}
          setOpenModal={setOpenModal}
        />
      )}
      <div className="container mx-auto p-5">
        <div className="wrapper mt-[50px] shadow-2xl rounded-2xl overflow-hidden">
          <div className="top_side flex items-center justify-between bg-slate-600 p-3">
            <span></span>
            <button
              onClick={() => setOpenModal(true)}
              className="p-5 bg-blue-700 text-white font-semibold rounded-2xl active:bg-blue-400 hover:bg-green-600 "
            >
              ADD CONTACT
            </button>
          </div>
          <div className="bottom_side p-3 bg-cyan-600">
            <h1 className="mb-[20px] uppercase text-[32px] text-center font-bold tracking-[12px]">
              contacts
            </h1>
            <ul className="">
              {contacts.length ? (

                contacts.map((item, index) => {
                  console.log();
                  return <List state={item} index={index} key={item.id} />;
                })
              ) : (
                <h1 className="text-center">HAS NOT CONTACTS</h1>
              )}
              :
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
