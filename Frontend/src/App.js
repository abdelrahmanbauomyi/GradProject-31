import "./App.css";
import LatestArticle from "./components/Home/ArticleSection/LatestArticle";
import DoctorCard from "./components/Home/MeetDoctor/DoctorCard";
import PatientReview from "./components/Home/PatientsReviewSection/PatientReview";

function App() {
  return (
    <div style={{ padding: "100px" }}>
      <PatientReview />
      <LatestArticle />
      <DoctorCard />
    </div>
  );
}

export default App;
