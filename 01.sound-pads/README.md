# React Drum Pad with Recording

This is a simple drum pad app built with React. Users can click on pads to play sounds, record their actions, and replay them with accurate timing.

## Features

- 12 interactive pads with unique beat sounds
- Toggle pad on/off and hear associated sounds
- Start and stop recording of pad clicks
- Play back recorded sequences with original timing
- Clear the recorded sequence to start again

## Tech Stack

- **React** (Functional Components + Hooks)
- **CSS Modules** for styling
- **HTML5 Audio API** for playback

## How It Works

- Each pad has a color, an "on" state, and a sound file URL.
- When a pad is clicked, its state toggles and the sound plays.
- If recording is active, the app logs the `id` of the pad and the time since the recording started.
- On playback, the recorded sequence is replayed using `setTimeout` to match the timing.
- You can clear the recording to reset the app state.

## State Management

- pad: Array of pad data with colors, on states, and sounds.
- isRecording: Boolean flag for recording state.
- recordedSequence: Stores the final sequence of pad clicks and times.
  re-render on each click).
- startTime: Captures the initial time to measure delays between clicks.
