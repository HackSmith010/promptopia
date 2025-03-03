import { useEffect } from "react";
import PromptCard from "./PromptCard"

const Profile = ({
  name, desc, data
}) => {
  useEffect(() => {
    console.log("Data in Profile: ",data);
  }, [data]);

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {name} Profile
        </span>
      </h1>
      <p className="desc text-left">
        {desc}
      </p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
          />
        ))
        }
        {data.length === 0 && (
          <p className="no_result">No Result</p>
        )}
      </div>
    </section>
  )
}

export default Profile
