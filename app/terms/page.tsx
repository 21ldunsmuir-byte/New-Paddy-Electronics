import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for New Paddy Electronics repair services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h1 className="font-display font-extrabold text-4xl text-white">Terms &amp; Conditions</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8">
            <p className="text-zinc-400 leading-relaxed text-sm">
              By using the services of New Paddy Electronics Ltd, you agree to the following terms and conditions.
            </p>

            {[
              {
                title: "Repair Services",
                body: "New Paddy Electronics provides repair services for mobile phones, tablets, laptops, MacBooks, and game consoles. All repairs are carried out by our certified technicians using genuine or high-quality compatible parts.",
              },
              {
                title: "Warranty",
                body: "We provide a warranty on all parts and labour for a period of 30 days from the date of repair. This warranty does not cover physical damage, water damage, or software-related issues that occur after the repair.",
              },
              {
                title: "Data & Privacy",
                body: "New Paddy Electronics is not responsible for any data loss that may occur during the repair process. We strongly recommend backing up your device before bringing it in for repair.",
              },
              {
                title: "Uncollected Devices",
                body: "Devices not collected within 60 days of completion of repair may be disposed of. We will attempt to contact you using the details provided at time of drop-off.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h2 className="font-display font-bold text-xl text-white mb-3">{title}</h2>
                <p className="text-zinc-400 leading-relaxed text-sm">{body}</p>
              </div>
            ))}

            <div>
              <h2 className="font-display font-bold text-xl text-white mb-3">Contact</h2>
              <p className="text-zinc-400 leading-relaxed text-sm mb-3">
                For any queries regarding our terms, please contact us at either branch:
              </p>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>· Dun Laoghaire: (01) 2303852</li>
                <li>· Leopardstown: (01) 2944561</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
