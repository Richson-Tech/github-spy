import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl mt-20 lg:text-6xl lg:mt-56 text-white">
        Before the Code Speaks, Let{" "}
        <span className="text-[#3ba8f0]">GitHubSpy</span> Tell the Story.
      </h1>
      <p className="mt-4 text-xl lg:text-3xl">
        for Software Developers & Clients.
      </p>
      <Link href="/login">
        <button className="relative overflow-hidden p-2 border-2 border-white rounded-xl mt-4 cursor-pointer text-white lg:text-2xl group">
          <span className="absolute inset-0 bg-gradient-to-r from-[#3ba8f0] to-[#1c85e8] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Get started{" "}
            <span className="group-hover:animate-bling">👀</span>
          </span>
        </button>
      </Link>
    </div>
  );
}
