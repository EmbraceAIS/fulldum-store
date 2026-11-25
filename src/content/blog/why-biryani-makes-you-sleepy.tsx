import { Link } from "@tanstack/react-router";

export const faq = [
  {
    q: "Why do I feel sleepy after eating biryani?",
    a: "Mostly because it is a big, rich meal, and big meals make most people drowsy. Cleveland Clinic lists signals from the gut, changes in blood glucose and amino acids, and shifts in the brain's arousal pathways as causes, and notes that bigger, higher-energy meals make the effect stronger. Lunch also lands on your body clock's early-afternoon dip.",
  },
  {
    q: "How long does a food coma last?",
    a: "According to Cleveland Clinic, sleepiness usually starts 30 minutes to two hours after a meal and can last up to three to four hours, peaking one to two hours after eating.",
  },
  {
    q: "Is it true that blood rushes to your stomach and away from your brain?",
    a: "No. Cleveland Clinic and the Sleep Foundation both say this older explanation has been debunked. After-meal sleepiness comes from several processes working together, not from the brain running short of blood.",
  },
  {
    q: "When is sleepiness after meals worth seeing a doctor about?",
    a: "Cleveland Clinic suggests seeing a provider if you have frequent or severe daytime sleepiness, loud snoring or breathing pauses, dizziness or fainting after meals, shakiness, sweating or confusion a few hours after eating, or signs of diabetes such as thirst, frequent urination or blurred vision.",
  },
];

export function Body() {
  return (
    <>
      <p>
        Sunday, around 2:30 in the afternoon. The biryani has been demolished, someone has quietly taken the last
        leg piece, the raita bowl is scraped clean, and the whole house has gone silent. Nobody planned a nap. The nap
        planned itself.
      </p>
      <p>
        Every desi family has a name for this. Ours is <em>biryani coma</em>, and we liked it so much we put it on a
        tee. But is it a real thing, or just an excuse to skip the dishes? Turns out the science is mostly on your
        side.
      </p>

      <h2>Yes, it has a medical name</h2>
      <p>
        Doctors call it <strong>postprandial somnolence</strong>. "Post" means after, "prandial" means a meal, and
        "somnolence" means sleepiness. In plain words: the sleepy, slow feeling you get after eating a big meal.{" "}
        <a href="https://my.clevelandclinic.org/health/diseases/food-coma" target="_blank" rel="noopener">Cleveland Clinic</a>{" "}
        says sleep tests show sleepiness rising after meals, usually peaking one to two hours later, and that the
        effect is stronger after larger, higher-energy meals.
      </p>
      <p>
        That last bit is the whole story of a biryani lunch. Nobody eats a small, modest plate of biryani. There is
        always a second helping, and usually a third "just a little rice, no gravy" helping.
      </p>

      <h2>Why it hits so hard</h2>
      <p>Scientists still don't fully agree on the reason, but a few things seem to work together:</p>
      <ul>
        <li>
          <strong>Your gut talks to your brain.</strong> Cleveland Clinic lists signals from the gut, changes in blood
          metabolites such as glucose and amino acids, and shifts in the brain's arousal pathways as causes.
        </li>
        <li>
          <strong>Your body clock is already dipping.</strong> There is a natural slump in alertness in the early
          afternoon, the "post-lunch dip". The{" "}
          <a href="https://www.sleepfoundation.org/nutrition/why-do-i-get-sleepy-after-eating" target="_blank" rel="noopener">Sleep Foundation</a>{" "}
          explains that the signals that keep you awake tend to drop at that time of day. Sunday biryani lunch arrives
          right on schedule for it.
        </li>
        <li>
          <strong>You've been up a while.</strong> The longer you've been awake, the stronger your drive to sleep, which
          is why a heavy lunch knocks you out more than a heavy breakfast would.
        </li>
        <li>
          <strong>Size matters.</strong> Large meals, and meals heavy on carbs or fat, are linked with more sleepiness
          afterwards. Rice, ghee, meat, fried onions. Biryani ticks every box with full marks.
        </li>
      </ul>

      <h2>The myth your uncle will tell you</h2>
      <p>
        "All the blood goes to your stomach, so the brain doesn't get any." You have heard this at a family lunch. It
        sounds logical. It is also not true: both Cleveland Clinic and the Sleep Foundation say this explanation has
        been debunked. Your brain is fine. It is just choosing the sofa.
      </p>

      <h2>How long does a biryani coma last?</h2>
      <p>
        According to Cleveland Clinic, the sleepiness usually starts 30 minutes to two hours after eating and can last
        up to three to four hours. So a 1:30 lunch can easily mean a slow, foggy afternoon until tea time. If you have
        a 3 PM meeting on a weekday, you already know this from experience.
      </p>

      <h2>How to survive it (without giving up biryani)</h2>
      <p>Nobody is asking you to eat less biryani. That would be against our values. But if you need to function after lunch, try these, based on what Cleveland Clinic and the Sleep Foundation suggest:</p>
      <ul>
        <li><strong>Take a 10 to 30 minute walk after eating.</strong> Round the colony, to the paan shop and back. It counts.</li>
        <li><strong>Go a little lighter on weekdays.</strong> Smaller, balanced plates with more protein and fibre: more salan and raita, slightly less rice.</li>
        <li><strong>Drink water, and step into the sun</strong> for a few minutes if you can.</li>
        <li><strong>Plan the nap.</strong> A short nap of about 20 minutes, when you can take one, beats fighting your eyelids for two hours.</li>
        <li><strong>Save the big plate for the weekend.</strong> Weekday office biryani and 3 PM reviews are not friends.</li>
      </ul>
      <p>
        One serious bit: Cleveland Clinic warns against driving or working with machinery when you feel sleepy after a
        meal. If the drive home from a wedding feast feels heavy, pull over, take a short nap, or let someone else
        drive. And if you feel very sleepy after meals often, or get dizzy, shaky or confused after eating, that is
        worth a chat with a doctor rather than a meme.
      </p>

      <h2>So, is the biryani coma real?</h2>
      <p>
        Real enough. A big, rich meal, an afternoon body clock that is already winding down, and a family that has
        collectively decided nothing else is happening today. Science calls it postprandial somnolence. Every Indian
        household calls it Sunday.
      </p>
      <p>
        If you're going to fall asleep on the sofa anyway, you may as well do it in something that explains why. Our{" "}
        <Link to="/product/$slug" params={{ slug: "biryani-coma" }}>Biryani Coma tee</Link> says it for you: the plate
        is empty, the controller can wait, do not disturb. It's ₹799 with shipping included, and there's a mug at ₹449
        for the chai that is supposed to wake you up after. Prefer the patient part of the process? The{" "}
        <Link to="/product/$slug" params={{ slug: "on-dum" }}>On Dum tee</Link> is for anyone who knows you don't open
        the lid early. Everything is printed to order in India and ships in 5–9 days.
      </p>
    </>
  );
}
