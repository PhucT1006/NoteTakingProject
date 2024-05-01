import React from "react";
import s from "./Cornell2.module.css";
import supabase from "../../config/SupabaseClient";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cornell = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    s1: "",
    s2: "",
    s3: "",
    s4: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const { data, error } = await supabase.from("note").insert([
        {
          s1: formData.s1,
          s2: formData.s2,
          s3: formData.s3,
          s4: formData.s4,
        },
      ]);
      navigate("/MyNotes");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <nav className={s.navBar}>
          <p className={s.currentPage}>Cornell</p>
          <ul className={s.navLinks}>
            <li className={s.liItems}>
              <Link className={s.links} onClick={handleSave}>
                Save
              </Link>
            </li>
            <li className={s.liItems}>
              <Link to={"/Notes"} className={s.links}>
                Back
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <form onSubmit={handleSave}>
        <div className={s.container}>
          <div className={s.quadrant1}>
            <textarea
              className={s.editor1}
              type="text"
              name="s1"
              id="s1"
              value={formData.s1}
              onChange={handleChanges}
              placeholder="Title"
            />
          </div>
          <div className={s.middle}>
            <div className={s.quadrant2}>
              <textarea
                type="text"
                name="s2"
                id="s2"
                className={s.editor2}
                value={formData.s2}
                onChange={handleChanges}
                placeholder="Questions"
              />
            </div>
            <div className={s.quadrant3}>
              <textarea
                type="text"
                name="s3"
                id="s3"
                className={s.editor3}
                value={formData.s3}
                onChange={handleChanges}
                placeholder="Key Notes"
              />
            </div>
          </div>
          <div className={s.quadrant4}>
            <textarea
              type="text"
              name="s4"
              id="s4"
              className={s.editor4}
              value={formData.s4}
              onChange={handleChanges}
              placeholder="Summary"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Cornell;

{
  /* <ReactQuill
            modules={modules}
            theme="snow"
            ref={editor1}
            name="title"
            className={s.editor1}
            placeholder="Title"
          /> */
}

/* const position = useRef({
    beforeStart: 0,
    beforeEnd: 0,
  }); 
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    inputRef.current.setSelectionRange(
      position.current.beforeStart,
      position.current.beforeEnd
    );
  }, [noteTitle]); */

/* const handleChanges = (e, content, delta, source, editor) => {
    const beforeStart = e.target.selectionStart;
    const beforeEnd = e.target.selectionEnd;

    position.current = {
      beforeStart,
      beforeEnd,
    };

    setNoteTitle(editor.getText());
    console.log(noteTitle);
  }; */
// Customize the toolbar
/*  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"], // blocks
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }], // lists
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
      [{ color: ["#000000"] }, { background: [] }], // dropdown with defaults
      [{ font: [] }], // font family
      [{ align: [] }], // text align
      ["clean"], // remove formatting
    ],
  }; */
