import React from "react";
import submitArrow from "../assets/submitArrow.svg";

const NoteInput = ({ addNote, selectedGroup }) => {
  const [noteText, setNoteText] = React.useState("");

  const handleAddNote = () => {
    if (noteText.trim() === "") return;
    const date = new Date();
    const newNote = {
      text: noteText,
      group: selectedGroup.name,
      //date format to 13 June 2024
      date: `${date.getDate()} ${date.toLocaleString("default", {
        month: "long",
      })} ${date.getFullYear()}`,

      time: date.toLocaleTimeString(),
    };
    addNote(newNote);
    setNoteText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      // Allows new line when Shift + Enter is pressed
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault(); // Prevents new line in textarea
      handleAddNote();
    }
  };

  return (
    <div className="h-full p-3">
      <textarea
        className="p-2 w-full h-full bg-white  font-roboto text-xsm text-black resize-none rounded-lg"
        type="text"
        value={noteText}
        onKeyPress={handleKeyPress}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAddNote} className="absolute bottom-2 right-2 p-3">
        <img src={submitArrow} alt="" className="h-5" />
      </button>
    </div>
  );
};

export default NoteInput;
