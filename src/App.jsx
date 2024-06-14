import { useEffect, useState, useRef } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NoteInput from "./components/NoteInput";
import NoteHeader from "./components/NoteHeader";
import Home from "./components/Home";
import GroupPopup from "./components/GroupPopup";
import NoteList from "./components/NoteList";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showGroupPopup, setShowGroupPopup] = useState(false);
  const [groups, setGroups] = useState([]);
  const [notes, setNotes] = useState([]);
  const noteListRef = useRef(null);

  const addGroup = (group) => {
    const newGroup = [...groups, group];
    setGroups(newGroup);
    localStorage.setItem("groups", JSON.stringify(newGroup));
  };

  const addNote = (note) => {
    const newNote = [...notes, note];
    setNotes(newNote);
    localStorage.setItem("notes", JSON.stringify(newNote));
  };

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  const getNotesFromGroup = (group) => {
    return notes.filter((note) => note.group === group);
  };

  useEffect(() => {
    if (noteListRef.current) {
      noteListRef.current.scrollTop = noteListRef.current.scrollHeight;
    }
  }, [notes]);

  return (
    <>
      <div className="min-h-screen ">
        <div className="min-h-screen max-h-screen w-full flex">
          <div
            className={`w-full max-h-screen ${
              showSidebar ? "block" : "hidden"
            } sm:w-1/4 sm:block `}
          >
            <Sidebar
              groups={groups}
              setShowSidebar={setShowSidebar}
              setShowGroupPopup={setShowGroupPopup}
              setSelectedGroup={setSelectedGroup}
            />
          </div>
          <div
            className={`w-full flex flex-col justify-center items-center sm:w-3/4 ${
              showSidebar ? "hidden" : "block"
            }`}
          >
            {selectedGroup ? (
              <>
                <div className="h-1/10 w-full bg-grayShade p-5 flex-shrink-0">
                  <NoteHeader
                    setShowSidebar={setShowSidebar}
                    selectedGroup={selectedGroup}
                  />
                </div>
                <div
                  ref={noteListRef}
                  className="h-7/10 w-full bg-homeBody flex-grow overflow-y-auto custom-scrollbar"
                >
                  <NoteList notes={getNotesFromGroup(selectedGroup.name)} />
                </div>
                <div className="h-2/10 w-full rounded-bl-2xl bg-grayShade flex-shrink-0">
                  <NoteInput addNote={addNote} selectedGroup={selectedGroup} />
                </div>
              </>
            ) : (
              <>
                <Home setShowSidebar={setShowSidebar} />
              </>
            )}
          </div>
        </div>

        {showGroupPopup && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-50  z-40"></div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <GroupPopup
                setShowGroupPopup={setShowGroupPopup}
                addGroup={addGroup}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
