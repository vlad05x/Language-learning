import React, { useState } from "react";

interface AddWordFormProps {
  addWord: (word: string, translation: string, difficulty: number) => void;
}

const AddWordForm: React.FC<AddWordFormProps> = ({ addWord }) => {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [difficulty, setDifficulty] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim() && translation.trim()) {
      addWord(word, translation, difficulty);
      setWord("");
      setTranslation("");
      setDifficulty(1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          placeholder="Слово"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          placeholder="Перевод"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Сложность (1-5):</label>
        <input
          type="number"
          className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          value={difficulty}
          min="1"
          max="5"
          onChange={(e) => setDifficulty(Number(e.target.value))}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
      >
        Добавить слово
      </button>
    </form>
  );
};

export default AddWordForm;
