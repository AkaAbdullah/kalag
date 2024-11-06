export const ScrollButton = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-14 w-7 flex items-center justify-center rounded-full border-2 border-blue-500">
        <div className="bg-blue-500 rounded-full h-4 w-1 animate-bounce"></div>
      </div>
      <h1 className="font-normal text-gray-400">Scroll Down</h1>
    </div>
  );
};
