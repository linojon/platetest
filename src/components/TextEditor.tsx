import { Plate } from "@udecode/plate";

export default function TextEditor(props) {
  const editableProps = {
    placeholder: "Type…",
    style: {
      width: "100%",
      padding: "15px",
    },
  };

  return <Plate id="plate-1" editableProps={editableProps} />;
}
