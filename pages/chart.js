import MyResponsivePie, {data} from "./components/line";

const Chart = () => {
  return (
    <div className="h-screen m-4">
      <MyResponsivePie data={data}/>
    </div>
  );
};
export default Chart;
