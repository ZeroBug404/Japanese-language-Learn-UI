import { Key } from 'react';
import Lesson from '../../components/Lesson/Lesson';
import { useGetAllLessonQuery } from '../../redux/api/lessonApi';
import React from 'react';

const Lessons = () => {
  const { data: lessonData, isLoading } = useGetAllLessonQuery({});
  const lesson = lessonData?.data;

  console.log(lesson);

  return (
    <div className="lg:w-[1200px] md:w-[90%] m-auto my-10 px-2">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {lesson?.map(
          (item: {
            name: string;
            usage: any;
            vocabularyCount: string;
            _id: Key | null | undefined;
            title: string;
            description: string;
            vocabolaries: string | any[];
            lessonNumber: number;
          }) => (
            <Lesson
              key={item._id}
              name={item.name}
              usage={item.usage}
              vocabularyCount={item.vocabularyCount}
              lessonNumber={item.lessonNumber}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Lessons;
