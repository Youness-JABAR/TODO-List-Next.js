import Link from "next/link";

export default function Header() {
    return (
      <div className="bg-blue-500 p-3">
        <Link href="/" className="bg-white text-blue-500 py-1 px-2 rounded-md ">Home</Link>
      </div>
    )
  }
  