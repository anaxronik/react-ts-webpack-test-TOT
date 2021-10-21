import { ComponentType } from "react";
import MainPage from "../pages/MainPage";
import NoteItemPage from "../pages/NoteItemPage";

export enum routes {
  main = "/",
  notes = "/notes",
  noteItem = "/notes/:id",
}

type TRoute = {
  path: routes;
  exact: boolean;
  component: ComponentType;
};

export const publicRoutes: TRoute[] = [
  {
    path: routes.main,
    exact: true,
    component: MainPage,
  },
  {
    path: routes.noteItem,
    exact: true,
    component: NoteItemPage,
  },
];
