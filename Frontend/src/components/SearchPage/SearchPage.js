import DrawerComponent from "../UI/DrawerComponent";
import Filters from "./Filters/Filters";
import useWidthAndHeight from "../../hooks/useWidthAndHeight";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import DoctorInfo from "./DoctorInfo/DoctorInfo";
import Header from "../Header/Header";
import DoctorCard from "../Home/MeetDoctor/DoctorCard";
import headersConfig from "../../utils/headersConfig";

const SearchPage = () => {
  const [width] = useWidthAndHeight();
  const filters = useSelector((state) => state.searchFilters);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const config = headersConfig('doctors/search')
    axios
      .get("http://localhost:8000/doctors/search", {
        params: {
          filters: filters,
        },
      } , config)
      .then((res) => {
       setDoctors(res.data);
      });
  }, [filters])
  if(!doctors) return null;
  return (
    <>
      <Header />
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
              marginTop: "3vw",
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
            <DoctorInfo doctor={doctor} />
          ))}

          {/* <DoctorInfo />
          <DoctorInfo />
          <DoctorInfo />
          <DoctorInfo />  */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
