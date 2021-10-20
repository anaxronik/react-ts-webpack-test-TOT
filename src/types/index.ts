export type TTodo = {
  id: string;
  text: string;
  isComplete: boolean;
};

export type TNote = {
  id: string;
  title: string;
  todos: TTodo[];
};
