import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl mt-20 lg:text-6xl lg:mt-56 text-white">
        Before the Code Speaks, Let{" "}
        <span className="text-[#696c6e]">GitHubSpy</span> Tell the Story.
      </h1>
      <p className="mt-4 text-xl lg:text-3xl">
        for Software Developers & Clients.
      </p>
      <Link href="/login">
        <div className="p-2 border-2 border-white rounded-xl mt-4 cursor-pointer text-white">
          Get started 👀{" "}
        </div>
      </Link>
    </div>
  );
}
