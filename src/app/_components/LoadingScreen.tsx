export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-16 h-16 mb-4">
        {/* Coffee bean 1 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-[#5F4B32] rounded-full transform rotate-45 animate-pulse"></div>

        {/* Coffee bean 2 */}
        <div
          className="absolute bottom-0 left-0 w-6 h-10 bg-[#5F4B32] rounded-full transform rotate-[135deg] animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>

        {/* Coffee bean 3 */}
        <div
          className="absolute bottom-0 right-0 w-6 h-10 bg-[#5F4B32] rounded-full transform rotate-[225deg] animate-pulse"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
      <p className="text-lg font-medium">Loading</p>
    </div>
  );
}
