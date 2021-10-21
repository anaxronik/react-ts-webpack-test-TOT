import { TNote } from "../types/note";

const initNotes: TNote[] = [
  {
    id: "1",
    title: "Изучить приложение",
    todos: [
      { id: "1", isComplete: false, text: "Создать заметку" },
      { id: "2", isComplete: false, text: "Изменить заметку" },
      { id: "3", isComplete: false, text: "удалить заметку" },
    ],
  },
];

class Api {
  storageName: string = "notes";

  constructor() {
    this.checkStorage();
  }

  checkStorage = () => {
    const notes = localStorage.getItem(this.storageName);
    if (!notes) {
      const content = initNotes;
      localStorage.setItem(this.storageName, JSON.stringify(content));
    }
  };

  getAllNotes = async (): Promise<TNote[]> => {
    const storage = localStorage.getItem(this.storageName);
    if (storage) {
      return JSON.parse(storage);
    }
    return [];
  };

  getById = async (id: string): Promise<TNote | null> => {
    const storage = localStorage.getItem(this.storageName);
    if (storage) {
      const notes: TNote[] = JSON.parse(storage);
      if (notes?.length) {
        const note = notes.find((note) => note.id === id);
        if (note) return note;
      }
    }
    return null;
  };
}

export const api = new Api();
