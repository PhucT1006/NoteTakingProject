import React, { useEffect, useState } from "react";
import s from "./MyNotes.module.css";
import supabase from "../../config/SupabaseClient";
import { Link } from "react-router-dom";
import NotesNavBar from "./NotesNavBar";
const MyNotes = () => {
  const [notes, setNote] = useState(null);
  useEffect(() => {
    const fetchNote = async () => {
      const { data, error } = await supabase.from("note").select();

      if (error) {
        setNote(null);
      }
      if (data) {
        setNote(data);
      }
    };
    fetchNote();
  }, []);

  return (
    <>
      <NotesNavBar />
      <div className={s.outer}>
        {notes &&
          notes.map((note) => (
            <div className={s.noteContainer} key={note.id}>
              <div className={s.title}>{note.s1}</div>

              <Link to={"/" + note.id} className={s.btn}>
                Edit
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default MyNotes;
