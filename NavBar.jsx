import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="/all-players">All Players</Link>
      <Link to="/">Single Player</Link>
      <Link to="/new-player-form">New Player Form</Link>
    </div>
  );
}
