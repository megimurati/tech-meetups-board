import React from "react";
import MeetupList from "./components/MeetupList";
import "./App.css";

// Importing images from the assets folder
import ReactSummit from "./assets/React_Summit_2025.png";
import JavaScriptWorld from "./assets/Javscript_World.png";
import AI_ML_Hackathon from "./assets/AI_ML_Hackathon.png";
import FullStackFest from "./assets/Full_Stack_Fest.png";
import NodeInteractive from "./assets/NodeJs_Interactive.png";
import PyCon from "./assets/PyCon.png";
import VueJsNation from "./assets/Vue_JS_Nation.png";
import HackTheFuture from "./assets/Hack_the_Future.png";
import DevOpsDays from "./assets/DevOps_days.png";
import BlockchainSummit from "./assets/Blockchain.png";


const events = [
  {
    id: 1,
    name: "React Summit 2025",
    date: "March 15, 2025",
    location: "San Francisco, CA",
    description: "A global conference for React developers.",
    image: ReactSummit,
    link: "https://reactsummit.com",
  },
  {
    id: 2,
    name: "JavaScript World",
    date: "April 5, 2025",
    location: "New York, NY",
    description: "The biggest JS conference in the world!",
    image: JavaScriptWorld,
    link: "https://jsworld.com",
  },
  {
    id: 3,
    name: "AI & ML Hackathon",
    date: "May 10, 2025",
    location: "Remote",
    description: "Build AI-powered apps in a 48-hour challenge.",
    image: AI_ML_Hackathon,
    link: "https://aihackathon.com",
  },
  {
    id: 4,
    name: "Full Stack Fest",
    date: "June 20, 2025",
    location: "Barcelona, Spain",
    description: "Deep dive into full-stack development.",
    image: FullStackFest,
    link: "https://fullstackfest.com",
  },
  {
    id: 5,
    name: "Node.js Interactive",
    date: "July 8, 2025",
    location: "Chicago, IL",
    description: "A conference dedicated to Node.js developers.",
    image: NodeInteractive,
    link: "https://nodeinteractive.com",
  },
  {
    id: 6,
    name: "PyCon 2025",
    date: "August 12, 2025",
    location: "Austin, TX",
    description: "The largest Python community conference.",
    image: PyCon,
    link: "https://pycon.com",
  },
  {
    id: 7,
    name: "Vue.js Nation",
    date: "September 3, 2025",
    location: "Online",
    description: "An international Vue.js conference.",
    image: VueJsNation,
    link: "https://vuejsnation.com",
  },
  {
    id: 8,
    name: "Hack the Future",
    date: "October 21, 2025",
    location: "London, UK",
    description: "A startup-focused hackathon.",
    image: HackTheFuture,
    link: "https://hackthefuture.com",
  },
  {
    id: 9,
    name: "DevOps Days",
    date: "November 18, 2025",
    location: "Seattle, WA",
    description: "Everything about DevOps culture and tools.",
    image: DevOpsDays,
    link: "https://devopsdays.com",
  },
  {
    id: 10,
    name: "Blockchain Summit",
    date: "December 5, 2025",
    location: "Dubai, UAE",
    description: "Exploring the future of blockchain technology.",
    image: BlockchainSummit,
    link: "https://blockchainsummit.com",
  },
];


function App() {
  return (
    <div className="app">
      <h1>🚀 Tech Meetups Board</h1>
      <MeetupList events={events} />
    </div>
  );
}

export default App;




