import { useParams, useNavigate } from 'react-router-dom';
import { useGetAllVocabularyQuery } from '../../redux/api/vocabularyApi';
import { useState } from 'react';
import React from 'react';

//@ts-ignore
import Confetti from 'react-confetti';

const LessonDetails = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const { data: vocabularyData } = useGetAllVocabularyQuery({});
  const vocabulary = vocabularyData?.data;

  // Filter vocabulary based on the lessonId
  const lessonVocabularies = vocabulary?.filter(
    (item: { lessonNumber: string | undefined }) =>
      item.lessonNumber == lessonId,
  );

  // State to track the current vocabulary index and completion
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Handle Next button click
  const handleNext = () => {
    if (lessonVocabularies && currentIndex < lessonVocabularies.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle Previous button click
  const handlePrevious = () => {
    if (lessonVocabularies && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Play pronunciation audio
  const playPronunciation = (word: string | undefined) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'ja-JP'; // Japanese
    window.speechSynthesis.speak(utterance);
  };

  // Handle lesson completion
  const handleComplete = () => {
    setIsComplete(true);
    setTimeout(() => {
      navigate('/lessons');
    }, 3000); // Redirect after 3 seconds
  };

  const currentVocabulary = lessonVocabularies?.[currentIndex];

  return (
    <div className="p-4">
      {isComplete && <Confetti />}

      {currentVocabulary ? (
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-end">
            <div>
              <h1
                className="text-lg font-bold cursor-pointer"
                onClick={() => playPronunciation(currentVocabulary.word)}
              >
                {currentVocabulary.word}
              </h1>
              {/* <p><strong>Usage:</strong> {currentVocabulary.usage}</p> */}
              <p>
                <strong>Meaning:</strong> {currentVocabulary.meaning}
              </p>
              <p>
                <strong>Pronunciation:</strong>{' '}
                {currentVocabulary.pronunciation}
              </p>
              <p>
                <strong>When to Say:</strong> {currentVocabulary.whenToSay}
              </p>
              <p>
                <strong>Lesson Number:</strong> {currentVocabulary.lessonNumber}
              </p>
            </div>

            <div>
              <button
                onClick={() => playPronunciation(currentVocabulary.word)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg mt-4"
              >
                Pronounce
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No vocabulary found for this lesson.</p>
      )}

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        {lessonVocabularies &&
        currentIndex === lessonVocabularies.length - 1 ? (
          <button
            onClick={handleComplete}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Complete
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={
              lessonVocabularies &&
              currentIndex === lessonVocabularies.length - 1
            }
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonDetails;
