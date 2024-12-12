import React from 'react';
import toast from 'react-hot-toast';
import { useCreateVocabularyMutation } from '../../redux/api/vocabularyApi';
import { useGetAllLessonQuery } from '../../redux/api/lessonApi';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';

const AddVocabulary = () => {
  const [createVocabulary] = useCreateVocabularyMutation();

  const { data: lessonData, isLoading } = useGetAllLessonQuery({});
  const lesson = lessonData?.data;

  const lessonNumber = lesson?.map((item: any) => item.lessonNumber);

  console.log(lessonNumber);

  const handleCreateVocabulary = async (event: any) => {
    try {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const word = form.Word.value;
      const pronunciation = form.pronunciation.value;
      const meaning = form.meaning.value;
      const whenToSay = form.whenToSay.value;
    //   const lessonNumber = form.lessonNumber.value;

      const data = {
        word,
        pronunciation,
        meaning,
        whenToSay,
        lessonNumber: 1,
        adminEmail: 'admin@example.com',
      };

      console.log(data);
      

    //   const res = await createVocabulary(data);
    //   console.log(res);

      if (data) {
        form.reset();

        toast.success('Vocabulary created successfully');
      } else {
        toast.error('Failed to create Vocabulary');
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
        <form onSubmit={handleCreateVocabulary}>
          <div className="p-6.5">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Word
                </label>
                <input
                  type="text"
                  placeholder="Enter Word"
                  name="Word"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Pronunciation
                </label>
                <input
                  type="text"
                  placeholder="Enter pronunciation"
                  name="pronunciation"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  whenToSay
                </label>
                <input
                  type="text"
                  placeholder="Enter when To Say"
                  name="whenToSay"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Meaning
                </label>
                <input
                  type="text"
                  placeholder="Enter meaning"
                  name="meaning"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full">
                <SelectGroupOne data={lessonNumber} />
              </div>
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

export default AddVocabulary;
