import { logo } from "../assets";
function Hero() {
  return (
    <header className="w-full justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/deepakChourasiya-aj")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="text-center  m-auto my-5 min-w-4	">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  );
}

export default Hero;

// import { logo } from "../assets";

// function Hero() {
//   return (
//     <header className="w-full justify-center items-center flex-col">
//       <nav className="flex justify-between items-center w-full mb-10 pt-3">
//         <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
//         <button
//           type="button"
//           onClick={() => window.open("https://github.com/deepakChourasiya-aj")}
//           className="black_btn"
//         >
//           Github
//         </button>
//       </nav>
//       <h1 className="head_text">
//         Summarize Articles with <br />
//         <span className="orange_gradient">OpenAI GPT-4</span>
//       </h1>
//       <h2 className="text-center  m-auto my-5 w-[600px]">
//         Simplify your reading with Summize, an open-source article summarizer
//         that transforms lengthy articles into clear and concise summaries
//       </h2>
//     </header>
//   );
// }

// export default Hero;
