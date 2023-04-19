import DrawerComponent from "../UI/DrawerComponent";
import Filters from "./Filters/Filters";
import useWidthAndHeight from "../../hooks/useWidthAndHeight";
import DoctorCard from "../Home/MeetDoctor/DoctorCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const SearchPage = () => {
  const [width] = useWidthAndHeight();
  const filters = useSelector((state) => state.searchFilters);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/doctors/search", {
        params: {
          filters: filters,
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(filters);
        setDoctors((docotors) => res.data);
      });
  }, [filters]);
  return (
    <>
      <div
        style={{
          display: width > 800 ? "flex" : "",
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
          {doctors.map((doctor) => (
            <DoctorCard
              doctorName={doctor.Dname}
              speciality={doctor.speciality}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
