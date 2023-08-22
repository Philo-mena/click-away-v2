import { Button } from "./ui/button";
import picture from "../../src/img/farm.jpg";
import fresh from "../../src/img/fresh.jpg";
import fruit from "../../src/img/fruit.jpg";
import { Products } from "./Products";
import { Section } from "./Section";
import { FAQ } from "./FAQ";

export default function Home() {
  return (
    <main>
      <header
        className=" h-[50vh] flex items-center justify-center relative"
        style={{ background: `url(${picture}) center center/cover` }}
      >
        <div className="max-w-[700px]  text-center z-20 ">
          <h1 className="text-6xl font-bold mb-5 text-white">
            Worry less eat healthy
          </h1>
          <p className="text-lg mb-8 text-white max-w-[500px] mx-auto">
            one Elm, located in an intimate enclave at the heart of Accra's most
            distinquished and elegant area: Airport Res
          </p>
          <Button className="bg-[#0ead69] w-[152px] h-[48px] text-base font-semibold hover:bg-[#0ead69]">
            View Products
          </Button>
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </header>

      <section className="mt-32 container">
        <h2 className="text-2xl font-bold mb-6">Products Available</h2>
        <Products />
      </section>
      <section className="mt-32 container text-center">
        <h2 className="text-2xl font-bold mb-20">Why choose click-away</h2>
        <Section />
      </section>
      <section
        className="mt-32  h-[320px] flex items-center justify-center relative"
        style={{ background: `url(${fruit}) center center/cover` }}
      >
        <h2 className="text-4xl font-bold  z-20 text-white">Fresh</h2>
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.18) 16.31%,transparent 37.79%),linear-gradient(1turn,rgba(0,0,0,.8),transparent 79.49%)",
          }}
        ></div>
      </section>
      <section className="mt-32 container">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Question</h2>
        <FAQ />
      </section>
    </main>
  );
}
