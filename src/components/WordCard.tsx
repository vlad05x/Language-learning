import React from "react";

interface WordCardProps {
  word: string;
  translation: string;
  difficulty: number;
  learned: boolean;
  toggleLearned: () => void;
  deleteWord: () => void;
}

const WordCard: React.FC<WordCardProps> = ({ word, translation, difficulty, learned, toggleLearned, deleteWord }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex justify-between items-center mb-4 border-t-4 border-blue-500">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{word}</h3>
        <p className="text-gray-800 blur-sm">{translation}</p>
        <p className="text-gray-500">Сложность: {difficulty}/5</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={toggleLearned}
          className={`px-4 py-2 rounded-md transition ${
            learned ? 'bg-green-500' : 'bg-gray-300'
          } text-white hover:shadow-md hover:opacity-90`}
        >
          {learned ? "Выучено" : "Не выучено"}
        </button>
        <button
          onClick={deleteWord}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default WordCard;
