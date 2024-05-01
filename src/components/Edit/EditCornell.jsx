import s from "./EditCornell.module.css";
import supabase from "../../config/SupabaseClient";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const EditCornell = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [notes, setNotes] = useState(null);
  const [change1, setChange1] = useState("");
  const [change2, setChange2] = useState("");
  const [change3, setChange3] = useState("");
  const [change4, setChange4] = useState("");

  useEffect(() => {
    console.log("hello");
    const fetchNote = async () => {
      const { data, error } = await supabase.from("note").select().eq("id", id);
      console.log(data);
      setChange1(data[0].s1);
      setChange2(data[0].s2);
      setChange3(data[0].s3);
      setChange4(data[0].s4);
      if (error) {
        setNotes(null);
      }
      if (data) {
      }
    };
    fetchNote();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("note")
        .update([
          {
            s1: change1,
            s2: change2,
            s3: change3,
            s4: change4,
          },
        ])
        .eq("id", id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const deleteNotes = async () => {
      const { error } = await supabase.from("note").delete().eq("id", id);
      if (error) {
        console.log(error);
      }
    };
    deleteNotes();
    navigate("/MyNotes");
  };
  return (
    <>
      <div>
        <nav className={s.navBar}>
          <p className={s.currentPage}>Edit</p>
          <ul className={s.navLinks}>
            <li className={s.liItems}>
              <Link className={s.links} onClick={handleUpdate}>
                Save
              </Link>
            </li>
            <li className={s.liItems}>
              <Link className={s.links} onClick={handleDelete}>
                Delete
              </Link>
            </li>
            <li className={s.liItems}>
              <Link to={"/MyNotes"} className={s.links}>
                Back
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <form onSubmit={handleUpdate}>
        <div className={s.container}>
          <div className={s.quadrant1}>
            <textarea
              className={s.editor1}
              type="text"
              name="s1"
              id="s1"
              value={change1}
              onChange={(e) => setChange1(e.target.value)}
            />
          </div>
          <div className={s.middle}>
            <div className={s.quadrant2}>
              <textarea
                type="text"
                name="s2"
                id="s2"
                className={s.editor2}
                value={change2}
                onChange={(e) => setChange2(e.target.value)}
              />
            </div>
            <div className={s.quadrant3}>
              <textarea
                type="text"
                name="s3"
                id="s3"
                className={s.editor3}
                value={change3}
                onChange={(e) => setChange3(e.target.value)}
              />
            </div>
          </div>
          <div className={s.quadrant4}>
            <textarea
              type="text"
              name="s4"
              id="s4"
              className={s.editor4}
              value={change4}
              onChange={(e) => setChange4(e.target.value)}
            />
          </div>
        </div>
      </form>
      ;
    </>
  );
};

export default EditCornell;
