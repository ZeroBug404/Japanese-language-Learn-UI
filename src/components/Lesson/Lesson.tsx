import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  name: string;
  usage: string;
  vocabularyCount: string;
  lessonNumber: number;
}

const Lesson = ({
  name,
  usage,
  vocabularyCount,
  lessonNumber,
}: LessonProps) => {
  // const { lessonId } = useParams();

  // console.log(lessonId);

  return (
    <div className="h-[10rem] bg-white p-4 shadow-2 flex flex-col justify-between">
      <div className="">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{usage}</p>
      </div>
      <div className="flex justify-between">
        <div className="bg-amber-100 text-amber-500 flex justify-center items-center rounded p-2">
          <p>{vocabularyCount} vocabolaries</p>
        </div>
        <Link to={`/lessons/${lessonNumber}`}>
          <button
            className="
        bg-blue-500 hover:bg-blue-700 text-white        font-bold py-2 px-4 rounded"
          >
            Study
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Lesson;
