import HeroBackground from "../assets/heroBackground.jpeg";
function Hero() {
  return (
    <div className="relative h-screen w-full">
      <img
        src={HeroBackground}
        alt="Background Image"
        className="absolute inset-0 w-full h-full filter blur-sm"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Welcome to the Stephen King Wiki</h1>
        <p className="text-xl text-white mt-4">This is a sample text</p>
      </div>
    </div>
  );
}

export default Hero;
