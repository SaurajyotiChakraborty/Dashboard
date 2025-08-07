import { create } from 'zustand';
import { boardData } from '../data';

const useBoard = create((set) => ({
  board: boardData,
  setBoard: (newBoard) => set({ board: newBoard }),
}));

export default useBoard;
