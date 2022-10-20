import React, { useEffect, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

/**
 * @file src/components/Dashboard.js - Dashboard component for the application.
 *
 * @export
 * @return {*}
 */
export default function Dashboard() {
  const [error, setError] = useState("");
  const [picture, setPicture] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  useEffect(() => {
    async function getData() {
      await fetch("https://randomuser.me/api", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setPicture(data.results[0].picture.thumbnail));
    }
    getData();
  }, []);
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Name:</strong> {currentUser.displayName}
          <br />
          <strong>Email:</strong> {currentUser.email} <br />
          <div class="text-center rounded-full ">
            <img src={picture} alt="profile" className="rounded-full " />
          </div>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
