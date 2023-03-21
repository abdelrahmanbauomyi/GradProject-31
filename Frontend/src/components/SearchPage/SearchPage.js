import DrawerComponent from "../UI/DrawerComponent";
import Filters from "./Filters/Filters";
import useWidthAndHeight from "../../hooks/useWidthAndHeight";
import DoctorCard from "../Home/MeetDoctor/DoctorCard";

const SearchPage = () => {
  const [width] = useWidthAndHeight();
  return (
    <>
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
