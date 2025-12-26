export const Stats = () => {
  return (
    <div className="bg-(--color-easesmith) px-5 py-12">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-5">
        <div className="flex flex-col items-center">
          <h4 className="text-5xl font-bold text-(--color-para)">53+</h4>
          <p className="text-(--color-para) font-normal text-lg">F&B Brands</p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-5xl font-bold text-(--color-para)">₹96.2CR</h4>
          <p className="text-(--color-para) font-normal text-lg">
            Revenue generated
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-5xl font-bold text-(--color-para)">3.6%</h4>
          <p className="text-(--color-para) font-normal text-lg">Average CVR</p>
        </div>
      </div>
    </div>
  );
};
