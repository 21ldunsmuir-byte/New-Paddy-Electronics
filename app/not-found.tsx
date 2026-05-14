import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-zinc-950">
      <div className="text-center px-6">
        <div className="font-display font-extrabold text-[8rem] leading-none text-zinc-800 mb-4 select-none">
          404
        </div>
        <h1 className="font-display font-extrabold text-3xl text-white mb-3">Page Not Found</h1>
        <p className="text-zinc-400 mb-8 max-w-sm mx-auto text-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-accent">
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
