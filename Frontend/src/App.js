import "./App.css";
import LatestArticle from "./components/ArticleSection/LatestArticle";
import DoctorCard from "./components/MeetDoctor/DoctorCard";
import PatientReview from "./components/PatientsReviewSection/PatientReview";

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
