export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6 uppercase tracking-widest">
          Developer Security Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Security Score for Your{" "}
          <span className="text-[#58a6ff]">GitHub Repos</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly scan any GitHub repository for vulnerabilities, misconfigured secrets, outdated dependencies, and more. Get a prioritized action plan to harden your codebase.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["Dependency Audit", "Flags outdated & vulnerable packages"],
            ["Secret Detection", "Finds exposed tokens and credentials"],
            ["Config Analysis", "Reviews branch protection & permissions"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repo scans",
              "Full vulnerability report",
              "Dependency & secret detection",
              "Prioritized fix recommendations",
              "Email alerts on new issues",
              "GitHub Actions integration"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Securing Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Which repositories can I scan?",
              "Any public or private GitHub repository you have access to. Connect your GitHub account and select the repos you want to monitor."
            ],
            [
              "How is the security score calculated?",
              "We analyze dependency vulnerabilities, exposed secrets, branch protection rules, CI/CD configuration, and more — then weight each finding by severity to produce a 0–100 score."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel your subscription at any time from your account dashboard. You keep access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} GitHub Security Scorecard. All rights reserved.
      </footer>
    </main>
  );
}
