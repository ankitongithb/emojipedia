import React from "react";
import Level from "./Level";
import emojipedia from "../emojipedia";

function createEmoji(e) {
  return <Level key={e.id} emoji={e.emoji} head={e.name} desc={e.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
