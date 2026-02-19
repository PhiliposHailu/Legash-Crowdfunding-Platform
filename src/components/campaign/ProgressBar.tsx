interface Props {
  percentage: number;
}

export const ProgressBar = ({ percentage }: Props) => {
  return (
    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-green-600 h-full transition-all duration-700 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
