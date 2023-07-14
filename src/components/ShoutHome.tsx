import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Shoutout from "../models/Shoutout";
import { addShoutout, getShoutouts } from "../services/shoutoutService";
import AddForm from "./AddForm";
import "./Home.css";
import List from "./List";

const Home = () => {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const { user } = useContext(AuthContext);

  const loadShoutouts = async (): Promise<void> => {
    const shoutouts: Shoutout[] = await getShoutouts(null);
    setShoutouts(shoutouts);
  };

  useEffect(() => {
    (async () => {
      loadShoutouts();
    })();
  }, []);

  const addShoutoutHandler = async (newShoutout: Shoutout): Promise<void> => {
    // add the shoutout
    await addShoutout(newShoutout);
    // update state
    loadShoutouts();
  };

  return (
    <div className="Home">
      <h2>All Shoutouts</h2>
      <List shoutoutsProp={shoutouts} />
      {user ? (
        <AddForm addProp={addShoutoutHandler} />
      ) : (
        <p>Sign in to leave a shoutout</p>
      )}
    </div>
  );
};

export default Home;
