import { useState, useEffect } from "react";
import type { Course } from "../types/courses";

export const useCourse = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const response = await fetch(
          "https://infnova-course-api.vercel.app/api/courses",
        );

        if (!response.ok) {
          throw new Error("failed to load courses");
        }

        const data = await response.json();
        setCourses(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Error has just occurred");
      } finally {
        setIsLoading(false);
      }
    };
    loadCourses();
  }, []);
  {
    return { courses, isLoading, error };
  }
};
