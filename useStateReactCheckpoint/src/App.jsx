import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Define the state
  state = {
    person: {
      fullName: "Choupi",
    bio: "The Goat",
    imgSrc:
      "data:image/jpeg;base64,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",
    profession: "poupoune",
    },
    shows: false, // Boolean to toggle profile visibility
    mountTime: new Date(), // Time when the component was mounted
    timeSinceMount: 0, // Time interval since the component was mounted
  };

  // Toggle the shows state
  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  // Update the time since the component was mounted
  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      const timeSinceMount = Math.floor((now - this.state.mountTime) / 1000); // Time in seconds
      this.setState({ timeSinceMount });
    }, 1000);
  }

  // Clear the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f5e1c5",
        minHeight: "100vh",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#4a3b2f",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
          fontFamily: "'Cedarville Cursive', cursive",
        }}
      >
        Person Profile
      </h1>

      <button
      onClick={this.toggleProfile}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#8b5e3c",
          color: "#fff",
          border: "none",
          fontSize: "1.2rem",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        {shows ? "Hide Profile" : "Show Profile"}
      </button>

      {shows && (
        <div
          style={{
            border: "2px solid #6d4c3d",
            padding: "20px",
            borderRadius: "15px",
            maxWidth: "350px",
            margin: "20px auto",
            backgroundColor: "#e3c8a8",
            boxShadow: "4px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={person.imgSrc}
            alt={person.fullName}
            style={{
              width: "100%",
              borderRadius: "50%",
              border: "3px solid #6d4c3d",
            }}
          />
          <h2 style={{ color: "#4a3b2f", fontSize: "1.8rem" }}>
            {person.fullName}
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#5a4331" }}>
            <strong>Bio:</strong> {person.bio}
          </p>
          <p style={{ fontSize: "1.2rem", color: "#5a4331" }}>
            <strong>Profession:</strong> {person.profession}
          </p>
        </div>
      )}

      <p style={{ marginTop: "20px", fontSize: "1.2rem", color: "#4a3b2f" }}>
        Time since mount: <strong>{timeSinceMount}</strong> seconds
      </p>
    </div>
  );
};

export default App;
