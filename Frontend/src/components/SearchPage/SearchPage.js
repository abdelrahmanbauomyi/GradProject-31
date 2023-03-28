import DrawerComponent from "../UI/DrawerComponent";
import Filters from "./Filters/Filters";
import useWidthAndHeight from "../../hooks/useWidthAndHeight";
import DoctorCard from "../Home/MeetDoctor/DoctorCard";
import { useState, useEffect, useRef } from "react";

const SearchPage = () => {
  const [width] = useWidthAndHeight();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const nameRef = useRef()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
        method: "GET",
        url: "" + name,
        headers: { "X-Api-Key": "1p/gZ0J1DInsnxnWeWATeQ==hOAHUk1OWyq8w2h3" },
        contentType: "application/json",
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      setIsLoading(false);
    };
    fetchData();
  }, [name]);
  if (isLoading) return <p>LOADING......</p>;
  
  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        setName(nameRef.current.value)
      }}>
        <input  ref={nameRef}></input>
      </form>
      <div
        style={{
          display: width > 800 ? "flex" : "",
          justifyContent: "center",
          marginTop: "50px",
          gap: "50px",
        }}
      >
        {width > 800 ? (
          <div
            style={{
              marginTop: "200px",
              position: "sticky",
            }}
          >
            <Filters />
          </div>
        ) : (
          <div style={{}}>
            <DrawerComponent>
              <Filters />
            </DrawerComponent>
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
