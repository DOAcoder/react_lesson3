// import Button2 from "../UI/Button2";
// import Input1 from "../UI/Input/Input1";
// import Input3 from "../UI/Input/Input3";
// import Input2 from './../UI/Input/Input2';
import { useRef } from "react";
import Button2 from "../UI/Button/Button2";


const Modal = ({ setOpenModal, setContacts, contacts }) => {
  const input1Ref = useRef("");
  const input2Ref = useRef("");
  const input3Ref = useRef("");

  return (
    <div className="modal absolute z-99 w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.8)] ">
      <div className="absolute top-[250px] right-[600px]">
        <i
          onClick={() => setOpenModal(false)}
          className="bx bx-window-close font-medium text-[40px] text-red-600"
        ></i>
      </div>
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="wrapper w-full max-w-[600px] h-[400px] rounded-3xl p-6 bg-slate-500 absolute top-[50%] left-[50%] "
      >
        <div>
          <div className="mt-10 flex items-center justify-between gap-5">
            <div className="mb-6 w-full">
              <label
                htmlFor="text"
                className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white text-center"
              >
                Your name
              </label>
              {/* <Input1/> */}
              <input
                // onChange={(e)=>{setContactTitle(e.target.value)}}
                ref={input1Ref}
                type="text"
                id="text"
                maxLength={50}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-6 w-full">
              <label
                htmlFor="number"
                className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white text-center"
              >
                Your phone number
              </label>
              {/* <Input2 /> */}
              <input
                ref={input2Ref}
                type="tel"
                id="number"
                maxLength={13}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+998997564321"
                required
              />
            </div>
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="text"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white text-center"
            >
              Your image
            </label>
            {/* <Input3 /> */}
            <input
              ref={input3Ref}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter image url"
              required
            />
          </div>

          {/* <button
            onClick={() => addContact()}
            type="submit"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button> */}

          <Button2
            contacts={contacts}
            setContacts={setContacts}
            numInput={input2Ref}
            nameInput={input1Ref}
            imgInput={input3Ref}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
