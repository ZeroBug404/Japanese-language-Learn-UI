interface LessonProps {
  name: string;
  description: string;
}

const Lesson = ({ name, description }: LessonProps) => {
  return (
    <div className="w-[25rem] h-[10rem] bg-white p-4 shadow-2">
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="
        bg-blue-500 hover:bg-blue-700 text-white        font-bold py-2 px-4 rounded"
        >
          Study
        </button>
      </div>
    </div>
  );
};

export default Lesson;
