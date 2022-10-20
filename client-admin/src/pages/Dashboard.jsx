// import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Tables from "../components/Tables";

export default function Dashboard() {
  return (
    <Container style={{ transform: "scale(90%)" }}>
      <Row className="justify-content-start">
        <h1 className="text-5-xl font-bold d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          Movie List
        </h1>
        <Tables
          status={"dashboard"}
          head={[
            "No",
            "Title",
            "Genre",
            "Rating",
            "Created By",
            "Main Image",
            "Images",
            "Actions",
          ]}
        />
      </Row>
    </Container>
  );
}
