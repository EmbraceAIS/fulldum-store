import { Link } from "@tanstack/react-router";

const RULES = "https://indiabudget.gov.in/doc/cen/cus1426.pdf";
const GUIDE = "https://mumbaicustomszone3.gov.in/Content/images/pdf/Guide-to-Travelers.pdf";

export const faq = [
  {
    q: "How much can I bring to India duty-free in 2026?",
    a: "Under the Baggage Rules, 2026 (in force from 2 February 2026), an Indian resident or tourist of Indian origin arriving by air can bring articles worth up to ₹75,000 duty-free in accompanied baggage, plus used personal effects. Items such as gold or silver other than ornaments, televisions and alcohol over two litres are excluded from this allowance.",
  },
  {
    q: "How much gold jewellery can I bring from Dubai to India duty-free?",
    a: "If you have lived abroad for more than one year, the Baggage Rules, 2026 allow up to 40 grams of jewellery duty-free for a female passenger and 20 grams for any other passenger. The limit is by weight only. Gold coins, bars and biscuits are not covered and must be declared.",
  },
  {
    q: "Can my family combine our duty-free allowances?",
    a: "No. The rules say one passenger's free allowance cannot be pooled with another passenger's. Infants (children up to two years) do not get the ₹75,000 general allowance, only used personal effects.",
  },
  {
    q: "Can I bring a new laptop to India duty-free?",
    a: "Yes. A passenger aged 18 or above can bring one new laptop or notepad duty-free in their baggage, in addition to the general allowance.",
  },
];

export function Body() {
  return (
    <>
      <p>
        December in the Gulf has a very particular energy. The leave is approved, the ticket is booked, and the
        apartment has quietly turned into a warehouse. There is a suitcase for chocolates, a suitcase for the
        cousins, a suitcase for "Amma said get the good dates", and somewhere, under a duty-free perfume box, one
        small bag that is actually yours.
      </p>
      <p>
        Before you sit on the suitcase to zip it shut, it helps to know what Indian customs actually lets you bring
        home without paying duty. The rules changed this year, and some of the numbers your uncle swears by are out
        of date.
      </p>

      <h2>First, the rules are new</h2>
      <p>
        India replaced the old Baggage Rules, 2016 with the{" "}
        <a href={RULES} target="_blank" rel="noopener">Baggage Rules, 2026</a>, which came into force on 2 February
        2026. If someone in the family WhatsApp group is quoting ₹50,000 limits or jewellery limits in rupees, that's
        the old rulebook. Everything below comes from the 2026 notification and the February 2026{" "}
        <a href={GUIDE} target="_blank" rel="noopener">Guide for International Travellers</a> published by Mumbai
        Customs.
      </p>

      <h2>The big one: ₹75,000 of gifts, duty-free</h2>
      <p>
        If you are an Indian resident or a tourist of Indian origin, not an infant, and you are flying in, you can
        bring in articles worth up to <strong>₹75,000</strong> duty-free, as long as they are on you or in your
        accompanied baggage. That's your gifts budget in customs language: the perfumes, the chocolates, the
        watch for Appa, the new phone for your sister.
      </p>
      <p>On top of that:</p>
      <ul>
        <li>
          <strong>Your own used stuff is free.</strong> Used personal effects you need for daily life, plus travel
          souvenirs, are duty-free and don't count against the ₹75,000.
        </li>
        <li>
          <strong>One new laptop is free.</strong> If you are 18 or older, one new laptop or notepad is allowed
          duty-free, separately.
        </li>
        <li>
          <strong>No pooling.</strong> The rules say clearly that one passenger's allowance cannot be combined with
          another's. So a family of four can't hand one ₹3 lakh watch to one person and call it "₹75,000 each". Infants (up to two
          years old) don't get the ₹75,000 at all, only their used personal effects.
        </li>
      </ul>

      <h2>What the ₹75,000 does not cover</h2>
      <p>Annexure I of the rules lists things that are left out of the free allowance. The ones that matter for a December trip home:</p>
      <ul>
        <li><strong>Alcohol or wine over 2 litres.</strong></li>
        <li><strong>Cigarettes over 100 sticks</strong>, cigars over 25, or tobacco over 125 grams.</li>
        <li><strong>Gold or silver in any form other than ornaments.</strong> Coins, bars and biscuits are not gifts in customs' eyes.</li>
        <li><strong>Televisions.</strong> Yes, still. The big-screen-for-the-hall plan needs a duty budget.</li>
      </ul>

      <h2>Gold: now it's about grams, not rupees</h2>
      <p>
        This is the change most Gulf families care about. The old rules capped duty-free jewellery by value as
        well as weight; Customs' own guide now calls those value caps outdated. The 2026 rules work on{" "}
        <strong>weight only</strong>.
      </p>
      <ul>
        <li>If you have lived abroad for <strong>more than one year</strong>, a female passenger can bring up to <strong>40 grams</strong> of jewellery duty-free.</li>
        <li>Any other passenger can bring up to <strong>20 grams</strong>.</li>
        <li>"Jewellery" here means ornaments that people wear, in gold, silver, platinum or other precious metals, studded or not.</li>
        <li>Coins, bars and bullion are not covered by this allowance. The Mumbai Customs guide says they must be declared.</li>
      </ul>
      <p>
        Planning to bring more than that, or a gold coin for a wedding? It's possible, but not duty-free. Customs'
        guide points to a separate notification for passengers who pay duty on gold, with conditions on how long
        you have stayed abroad and how you pay. Check the current rules before you buy, not at the airport.
      </p>

      <h2>A quick pre-flight checklist</h2>
      <ul>
        <li>Add up the shop value of everything new you're carrying. Over ₹75,000 per person? Plan to declare it.</li>
        <li>Keep the bills for anything expensive, especially electronics and jewellery.</li>
        <li>Weigh the jewellery, not just the gifts. 40 grams goes faster than you think with one chain and two bangles.</li>
        <li>Coins and bars: declare them. Every time.</li>
        <li>Pack the gifts in one place, so if an officer asks, you can show them without unpacking your whole life on the belt.</li>
        <li>When in doubt, ask at the customs counter before you walk through. The guide is clear that undeclared items are dealt with under the Customs Act.</li>
      </ul>

      <h2>And the one bag that's actually yours</h2>
      <p>
        Every Gulf family knows the packing list by heart: one bag for me, the rest is gifts. We liked it so much we
        printed it. Our{" "}
        <Link to="/product/$slug" params={{ slug: "one-bag-for-me" }}>One Bag for Me tee</Link> has the suitcase and
        the HOME tag, and the{" "}
        <Link to="/product/$slug" params={{ slug: "leave-ticket" }}>Leave Ticket tee</Link> is for anyone who has been
        counting down to annual leave since March. Tees are ₹799 and mugs ₹449, shipping included, printed to order in
        India and delivered in 5–9 days. Order it to the family address before you fly, and it'll be waiting for you,
        no customs form needed.
      </p>
      <p className="text-sm text-muted-foreground">
        This is a plain-language summary of the Baggage Rules, 2026 (Notification No. 14/2026-Customs (N.T.), 1
        February 2026), checked on 27 November 2026. It isn't legal advice. Rules and duty rates can change, so check
        the latest CBIC notifications before you travel.
      </p>
    </>
  );
}
