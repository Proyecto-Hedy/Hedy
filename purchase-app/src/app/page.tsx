import Image from "next/image";
import Container  from "@/components/container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pl-4">
          <h1 className="text-4xl font-bold text-center">Welcome to Purchase App</h1>
          </div>
        </Container>
    </main> 
  );
}
