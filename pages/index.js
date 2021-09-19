import Head from "next/head";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <Chat />
    </div>
  );
}
