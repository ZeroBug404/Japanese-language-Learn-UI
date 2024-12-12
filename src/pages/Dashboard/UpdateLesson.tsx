import React from 'react';
import toast from 'react-hot-toast';
import {
  useGetSingleLessonQuery,
  useUpdateLessonMutation,
} from '../../redux/api/lessonApi';
import { useParams } from 'react-router-dom';

const UpdateLesson = () => {
  const [updateLesson] = useUpdateLessonMutation();

  const { lessonId } = useParams();

  const { data } = useGetSingleLessonQuery({ id: lessonId });

  const lessonData = data?.data;

  const handleCreateLesson = async (event: any) => {
    try {
      event.preventDefault();
      const form = event?.target as HTMLFormElement;
      const name = (form?.name as unknown as HTMLInputElement)?.value;
      const lessonNumber = (form?.lessonNo as unknown as HTMLInputElement)?.value;

      const data = {
        name: name ? name : lessonData.name,
        lessonNumber: parseInt(lessonNumber),
      };
      const res = await updateLesson({ data, id: lessonId });
      console.log(res);

      if (res.data) {
        form.reset();

        toast.success('Lesson updated successfully');
      } else {
        toast.error('Failed to update lesson');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-9">
      {/* <!-- Contact Form --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Add New Lesson
          </h3>
        </div>
        <form onSubmit={handleCreateLesson}>
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full ">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder={
                    lessonId ? `${lessonData?.name}` : 'Enter lesson name'
                  }
                  name="name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Lesson No <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="lessonNo"
                placeholder={
                  lessonId
                    ? `${lessonData?.lessonNumber}`
                    : 'Enter unique lesson number'
                }
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateLesson;
