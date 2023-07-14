import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Shoutout from "../models/Shoutout";
import { addShoutout, getShoutouts } from "../services/shoutoutService";
import AddForm from "./AddForm";
import List from "./List";
import "./ShoutoutsByName.css";

const ShoutoutsByName = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const name = useParams().name;
  const { user } = useContext(AuthContext);

  const loadShoutouts = async (): Promise<void> => {
    const shoutouts = await getShoutouts(name!);
    setShoutouts(shoutouts);
  };

  useEffect(() => {
    (async () => {
      loadShoutouts();
    })();
  }, [name]);

  const addShoutoutHandler = async (shoutout: Shoutout): Promise<void> => {
    await addShoutout(shoutout);
    loadShoutouts();
  };

  return (
    <div className="ShoutoutsByName">
      <h2>Shoutouts for {name}</h2>
      <Link to="/">Back to all shoutouts</Link>
      <List shoutoutsProp={shoutouts} />
      {user ? (
        <AddForm addProp={addShoutoutHandler} initialTo={name} />
      ) : (
        <p>Sign in to leave a shoutout</p>
      )}
    </div>
  );
};

export default ShoutoutsByName;
