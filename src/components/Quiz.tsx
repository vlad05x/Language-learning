import React, { useState } from "react";

interface QuizProps {
  words: { word: string; translation: string }[];
}

const Quiz: React.FC<QuizProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentWord = words[index];
    if (answer.trim().toLowerCase() === currentWord.translation.toLowerCase()) {
      setFeedback("Правильно!");
    } else {
      setFeedback(`Неправильно. Правильный ответ: ${currentWord.translation}`);
    }
    setAnswer("");
    setIndex((index + 1) % words.length);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Переведите слово: <span className="text-blue-500">{words[index].word}</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-3 w-full rounded-md mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
        >
          Проверить
        </button>
      </form>
      {feedback && (
        <p className={`mt-4 text-center ${feedback === "Правильно!" ? "text-green-500" : "text-red-500"}`}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default Quiz;
