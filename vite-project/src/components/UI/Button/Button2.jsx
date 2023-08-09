const Button2 = ({
  numInput,
  nameInput,
  imgInput,
  contacts,
  setContacts,
  setOpenModal,
}) => {
  const addContact = () => {
    const newContact = {
      id: Date.now(),
      title: nameInput.current.value,
      number: numInput.current.value,
      image: imgInput.current.value,
    };
    setContacts([...contacts, newContact]);
    console.log(contacts);
    setOpenModal(false);
  };
  return (
    <button
      onClick={() => addContact()}
      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  );
};

export default Button2;
