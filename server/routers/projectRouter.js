import { Router } from "express";
import { deleteAllProjects, deleteProjectById, getAllProjects, getProjectsByLanguage, projects, uploadImages } from "../controllers/projects.js";

export const projectRouter=Router()

projectRouter.post("/projects", uploadImages, projects)
projectRouter.get("/projects", getAllProjects);
projectRouter.get("/projectsByLanguage", getProjectsByLanguage);
projectRouter.delete("/projects", deleteAllProjects);
projectRouter.delete("/projects/:id", deleteProjectById);