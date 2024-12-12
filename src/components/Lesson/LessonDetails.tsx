import { useParams } from "react-router-dom";

const LessonDetails = () => {
  const { lessonId } = useParams();

  console.log("Lesson ID:", lessonId);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lesson Details</h1>
      <p>Details for lesson ID: {lessonId}</p>
    </div>
  );
};

export default LessonDetails;
