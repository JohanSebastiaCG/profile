import { Github } from "./Github";
import { Link } from "./LinkedIn";

export const Network = () => {
  return (
    <>
      <a
        href="https://github.com/JohanSebastiaCG"
        className="text-gray-500 hover:text-gray-900 transition duration-75 ease-in-out"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/johan-sebasti%C3%A1n-castro-garcia-6b22a7254/"
        className="text-gray-500 hover:text-gray-900 transition duration-75 ease-in-out"
      >
        <Link />
      </a>
    </>
  );
};
