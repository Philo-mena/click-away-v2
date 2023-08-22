import { Badge } from "./ui/badge";
import Image1 from "../../src/img/carrot.jpg";
import Image2 from "../../src/img/veg.jpg";
import Image3 from "../../src/img/produce.jpg";

export function Products() {
  return (
    <div className="grid grid-cols-3 pb-6">
      <div className="w-[330px] h-[385px]  rounded-2xl relative ">
        <img
          src={Image2}
          alt=""
          className="object-cover w-[330px] h-[385px] absolute inset-0 rounded-2xl block"
        />
        <span className="absolute left-6 bottom-6 z-20">
          <h4 className="text-white text-lg font-semibold">Tomatoes</h4>

          <Badge className="bg-[#0ead69] hover:bg-[#0ead69]"> ₵ 789</Badge>
        </span>
        <div
          className="absolute inset-0 z-10 rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </div>
      <div className="w-[330px] h-[385px]  rounded-2xl relative ">
        <img
          src={Image1}
          alt=""
          className="object-cover w-[330px] h-[385px] absolute inset-0 rounded-2xl block"
        />
        <span className="absolute left-6 bottom-6 z-20">
          <h4 className="text-white text-lg font-semibold">Tomatoes</h4>

          <Badge className="bg-[#0ead69] hover:bg-[#0ead69]"> ₵ 789</Badge>
        </span>
        <div
          className="absolute inset-0 z-10 rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </div>
      <div className="w-[330px] h-[385px]  rounded-2xl relative ">
        <img
          src={Image3}
          alt=""
          className="object-cover w-[330px] h-[385px] absolute inset-0 rounded-2xl block"
        />
        <span className="absolute left-6 bottom-6 z-20">
          <h4 className="text-white text-lg font-semibold">Tomatoes</h4>

          <Badge className="bg-[#0ead69] hover:bg-[#0ead69]"> ₵ 789</Badge>
        </span>
        <div
          className="absolute inset-0 z-10 rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </div>
    </div>
  );
}
