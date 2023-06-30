import { useState } from "react";
import kettlebellPic from "/kettlebellPic.jpeg";
import womanrightPic from "/femalebodyrightPic.jpg";
import womanleftPic from "/femalebodyleftPic copy.jpg";
import _ from "lodash";

const workouts = [
  { name: "crunches", type: "abs" },
  { name: "Bicycle bent leg", type: "abs" },
  { name: "V ups", type: "abs" },
  { name: "Bicycles straight leg", type: "abs" },
  { name: "Dish", type: "abs" },
  { name: "Plank", type: "abs" },
  { name: "Plank toe taps", type: "abs" },
  { name: "Plank hip thrusts", type: "abs" },
  { name: "Dish", type: "abs" },
  { name: "Butterfly crunch", type: "abs" },
  { name: "Toe touches", type: "abs" },
  { name: "Reach ups ", type: "abs" },
  { name: "Leg raises", type: "abs" },
  { name: "ABC's on stability ball", type: "abs" },
  { name: "Plank elbows to hands", type: "abs" },
  { name: "Russian Twist", type: "abs" },
  { name: "Side plank", type: "abs" },
  { name: "Star crunch", type: "abs" },
  { name: "Crucifix crunch", type: "abs" },
  { name: "Around the world", type: "abs" },
  { name: "Kettlebell swings", type: "legs" },
  { name: "Wall sit", type: "legs" },
  { name: "Lunges", type: "legs" },
  { name: "Squat", type: "legs" },
  { name: "Squat with pulse", type: "legs" },
  { name: "Squat heel raises", type: "legs" },
  { name: "Crab walk with band", type: "legs" },
  { name: "Weighted bridge", type: "legs" },
  { name: "Shoulder press", type: "arms" },
  { name: "Dips", type: "arms" },
  { name: "Lat raises", type: "arms" },
  { name: "Frontal raises", type: "arms" },
  { name: "Rows", type: "arms" },
  { name: "Curls", type: "arms" },
  { name: "Push ups", type: "arms" },
  { name: "Clears", type: "arms" },
  { name: "Steering wheel", type: "arms" },
  { name: "Supermans", type: "arms" },
];

workouts.abs;

workouts.filter((workout) => workout.type === "abs");

export default function App() {
  const [pageNumber, setPageNumber] = useState(0);
  if (pageNumber === 0) {
    return <Welcome onNextClick={() => setPageNumber(1)} />;
  }
  if (pageNumber === 1) {
    return <TargetWorkout onNextClick={() => setPageNumber(2)} />;
  }
  if (pageNumber === 2) {
    return <FinalWorkout />;
  }
}

function Welcome({ onNextClick }) {
  return (
    <div>
      <div className="flex justify-center mt-8">Workout Generator</div>
      <div className="relative flex justify-center">
        <button
          className="absolute inset-0 mt-32 animate-pulse text-lg"
          onClick={() => onNextClick()}
        >
          Give me a workout
        </button>
        <img src={kettlebellPic} className="w-80 mt-4" />
      </div>
    </div>
  );
}

function TargetWorkout({ onNextClick }) {
  return (
    <div className="bg">
      <div className="flex justify-center mt-3">
        I want my workout to include
      </div>
      <div className="flex justify-between">
        <img src={womanleftPic} className="w-28" />
        <div className="flex flex-col mt-14">
          <label>
            <input type="checkbox" />
            Arms
          </label>
          <label>
            <input type="checkbox" />
            Abs
          </label>
          <label>
            <input type="checkbox" />
            Legs
          </label>
          <button
            onClick={() => onNextClick()}
            className="mt-8 border px-2 border-black shadow rounded"
          >
            GENERATE
          </button>
        </div>
        <img src={womanrightPic} className="w-32" />
      </div>
    </div>
  );
}

function FinalWorkout() {
  const [randomWorkouts, setRandomWorkouts] = useState(
    _.sampleSize(workouts, 9)
  );
  return (
    <div>
      <div>Your Workout</div>
      <div>Set 1</div>
      <ul>
        {randomWorkouts.slice(0,3).map((workouts) => (
          <li key={workouts.name}>{workouts.name}</li>
        ))}
      </ul>
      <div>Set 2</div>
      <ul>
        {randomWorkouts.slice(3,6).map((workouts) => (
          <li key={workouts.name}>{workouts.name}</li>
        ))}
      </ul>
      <div>Set 3</div>
      <ul>
        {randomWorkouts.slice(6,9).map((workouts) => (
          <li key={workouts.name}>{workouts.name}</li>
        ))}
      </ul>
      {/* {JSON.stringify(randomWorkouts)} */}
    </div>
  );
}

// things for Dan to add - make it so it doesn't put more than one of the same type of exercise.
// add a timer and highlight the exercise we are on
// set reps for each exercise eg 4 for side planks
// add an input field for adding new exercises
// if you don't like one exercise you can click it and it will replace just that exercise