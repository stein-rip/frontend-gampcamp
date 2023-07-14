import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Shoutout from "../models/Shoutout";
import "./AddForm.css";

interface Props {
  addProp: (newShoutout: Shoutout) => void;
  initialTo?: string;
}

const AddForm = ({ addProp, initialTo }: Props) => {
  const { user } = useContext(AuthContext);
  const [to, setTo] = useState(initialTo || "");
  const [from, setFrom] = useState(user?.displayName || "");
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addProp({ to, from, text, pic: user?.photoURL! });
    setTo("");
    setFrom("");
    setText("");
  };

  return (
    <form className="AddForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        disabled={initialTo !== undefined}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={!!user?.displayName}
      />
      <label htmlFor="text">Text</label>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={30}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default AddForm;
