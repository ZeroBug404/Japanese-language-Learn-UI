/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const options = [
  { value: "option1", label: "42" },
  { value: "option2", label: "48" },
  { value: "option3", label: "54" },
];

export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    padding: "10px",
    border: "none",
    borderBottom: "2px solid #ccc",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "20px",
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#36d7b7" : "white",
    fontSize: "14px",
  }),
};
