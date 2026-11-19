import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead({ title: "Privacy — FullDum", description: "A short, honest privacy policy for the FullDum store: what we collect, why, and that we never sell your data.", path: "/privacy" }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14">
      <p className="kicker text-muted-foreground">Short and honest</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">Privacy</h1>
      <div className="rule-turmeric mt-5" />
      <div className="prose-fd mt-8">
<p>We collect only what we need to make and send your order: your name, email, phone number and shipping address.</p>
<h2>What we do not do</h2><p>We do not sell or rent your personal data to anyone.</p>
<h2>Payments</h2><p>Payments will be processed by Razorpay. We never see or store your card details.</p>
<h2>Emails</h2><p>If you ask to be notified about a launch, we use your email only for that.</p>
<h2>Contact</h2><p>To see, correct or delete your data, write to <a href="mailto:wdhxb7q992wc@mail.grokbot.com">wdhxb7q992wc@mail.grokbot.com</a>.</p>
      </div>
    </section>
  );
}

