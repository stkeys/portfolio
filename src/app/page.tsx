'use client';
import Nav from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(60,100,200,0.3),rgba(255,255,255,0))] min-h-screen w-full ">
       <div className="pt-10 mx-[10%]">
        <Nav />
       </div>
    </div>
  );
}
