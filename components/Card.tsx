import Image from "next/image";
import CardProps from "../typings/CardProps";
import { BsGithub } from "react-icons/bs";

const Card = ({
  title,
  imageURL,
  description,
  tags,
  projectLink,
}: CardProps) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-8 bg-white">
        <Image
          className="w-full"
          src={imageURL}
          width={400}
          height={220}
          layout="responsive"
          alt="working of the project"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <a
            href={projectLink}
            className=" inline-flex gap-2 border-2 border-black p-2 mt-2"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={32} /> <p className="text-xl ">Check Out</p>
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
  </span> */}
        </div>
      </div>
    </>
  );
};

export default Card;
