import "./App.css";
import LatestArticle from "./components/Home/ArticleSection/LatestArticle";
import PatientReview from "./components/Home/PatientsReviewSection/PatientReview";
import MeetDoctor from "./components/Home/MeetDoctor/MeetDoctor"


function App() {
  return (
    <div style={{ padding: "10px" }}>
      <MeetDoctor /> 
      <PatientReview />
      <LatestArticle />

      
    </div>
  );
}

export default App;
