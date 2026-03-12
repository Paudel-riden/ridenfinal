export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#0b0f19" }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="font-inter text-sm text-secondary-text">Loading...</p>
      </div>
    </div>
  );
}
