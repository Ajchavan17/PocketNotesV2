import { React } from "react";

const NoteList = ({ notes }) => {
  const formatTime = (time) => {
    let date;
    if (isNaN(Date.parse(time))) {
      date = new Date(); // Set default date if time is invalid
    } else {
      date = new Date(time);
    }
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return ` ${formattedTime}`;
  };
  return (
    <div className="p-5 flex flex-col space-y-10">
      {notes.map((note, index) => (
        <>
          <div
            key={index}
            className="flex space-x-3 justify-start text-xs font-bold sm:text-base "
          >
            <div className="flex-col space-y-1 text-gray-500">
              <p>{formatTime(note.time)}</p>
              <p>{note.date}</p>
            </div>
            <div className="pl-auto break-words flex-1 min-w-0">
              {note.text}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default NoteList;
