export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2 text-blue-400">
      <div className="flex justify-center items-center custom-loader"></div>
      <p>LOADING</p>
    </div>
  );
}
