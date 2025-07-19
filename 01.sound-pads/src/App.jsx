import { useState, useRef } from "react";
import Pad from "./components/Pad/Pad";
import "./App.css";
import padsData from "../pads";

function App() {
  const [pad, setPad] = useState(padsData);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedSequence, setRecordSequence] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const sequenceRef = useRef([]);

  function togglePad(id) {
    setPad((prevPad) =>
      prevPad.map((pad) => {
        if (pad.id === id) {
          return {
            ...pad,
            on: !pad.on,
          };
        }
        return pad;
      })
    );
    const sound = pad.find((pad) => pad.id === id);
    const audio = new Audio(sound.sound);
    audio.play();

    if (isRecording) {
      const now = Date.now();
      const time = now - startTime;
      sequenceRef.current.push({ id, time });
    }
  }

  function startRecording() {
    sequenceRef.current = [];
    setRecordSequence([]);
    setStartTime(Date.now());
    setIsRecording(true);
  }

  function stopRecording() {
    setIsRecording(false);
    setRecordSequence(sequenceRef.current);
  }

  function playRecording() {
    if (recordedSequence.length === 0) return;

    recordedSequence.forEach((entry) => {
      setTimeout(() => {
        togglePad(entry.id);
      }, entry.time);
    });
  }

  function clearRecording() {
    setRecordSequence([]);
    sequenceRef.current = [];
  }
  const padElements = pad.map((pad) => (
    <Pad
      key={pad.id}
      color={pad.color}
      on={pad.on}
      onClick={() => togglePad(pad.id)}
    />
  ));
  return (
    <>
      <main>
        <h1>🎧 React Drum Pad</h1>

        <div className="pad-container">{padElements}</div>

        <div className="controls">
          <button onClick={startRecording} disabled={isRecording}>
            🔴 Record
          </button>
          <button onClick={stopRecording} disabled={!isRecording}>
            ⏹ Stop
          </button>
          <button
            onClick={playRecording}
            disabled={recordedSequence.length === 0}
          >
            ▶️ Play
          </button>
          <button onClick={clearRecording}>🗑 Clear</button>
        </div>

        <p>
          {isRecording
            ? "🎙 Recording..."
            : recordedSequence.length > 0
            ? "✅ Sequence Ready"
            : "🎛 Idle"}
        </p>
      </main>
    </>
  );
}

export default App;
