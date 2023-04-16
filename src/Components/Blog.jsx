import React from "react";
import vector from "../assets/All Images/Vector.png";
import vector_1 from "../assets/All Images/Vector-1.png";

const Blog = () => {
  const styles = {
    backgroundImage: `url('${vector}'), url('${vector_1}')`,
    backgroundPosition: "bottom left, right",
  };
  return (
    <div>
      <div
        
        className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat grid grid-cols-[1fr_4fr_0.45fr]  py-[40px]"
      >
        <div>
          <div>
<img src={vector} alt="" />
          </div>
        </div>
        <div className="flex items-center">
        <h2 className="text-3xl pl-[420px] font-bold">Blog</h2>
        </div>
        
        <div>
          <div className="-mt-[139px]">
            <img className="" src={vector_1} alt="" />
          </div>
        </div>
      </div>
      {/* <div
        style={styles}
        className="bg-gradient-to-r from-sky-50/20 to-indigo-50/20 bg-no-repeat flex  items-center justify-center text-4xl font-bold py-[40px]"
      >
        <h2>Blog</h2>
      </div> */}
      <div className="custom_container">
        <h2 className="text-2xl font-bold mb-3">When should you use context API?</h2>
        <p className="mb-3">In react when there are lot of components prop drilling in the nested components can be a lot of hassle and it could get messy.
          Context Api makes it possible to pass data from parent to children nested deep down the component tree directly without dealing the hassle of prop drilling.
        </p>
        <h2 className="text-2xl font-bold mb-3">What is a custom hook?</h2>
        <p className="mb-3">Custom Hooks are reusable functions that we create to add special and unique functionality to the React applications</p>
        <h2 className="text-2xl font-bold mb-3">What is useRef?</h2>
        <p className="mb-3">useRef is a react hook that allows to persist values between renders.It accepts one argument as the initial value and returns a reference.</p>
        <h2 className="text-2xl font-bold mb-3"> What is useMemo?</h2>
        <p>useMemo hook is a function that returns a memoized value. Which is of a passed in resource-intensive function.</p>
      </div>
    </div>
  );
};

export default Blog;
