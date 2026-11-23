import { Link } from "@tanstack/react-router";

export const faq = [
  {
    q: "What should I wear to an outdoor concert in India in December?",
    a: "A breathable cotton base such as a graphic tee, comfortable trousers or denim, closed shoes you have already broken in, and one layer you can tie around your waist. How warm that layer needs to be depends on the city: Delhi NCR nights get properly cold in December, while Mumbai stays mild.",
  },
  {
    q: "Can I wear heels to a concert?",
    a: "Best not. Big shows mean hours of standing, long queues and uneven, often dusty ground. Stylists quoted by Hindustan Times call pointed heels a strict no for concert grounds. Flat, closed footwear is the safer bet.",
  },
  {
    q: "What bag can I carry to a concert in India?",
    a: "Carry a small crossbody or belt bag with just your phone, ID, cards and ticket. Bag rules differ by venue and show, so read the guidelines on your ticket or the ticketing page before you leave home.",
  },
];

export function Body() {
  return (
    <>
      <p>
        December's concert calendar is full. Big shows are lined up across Mumbai, Navi Mumbai, Bengaluru, Delhi NCR,
        Lucknow, Kolkata and more, and the group chat has already moved from "who's going?" to "what are you wearing?".
        The ticket is sorted. Maybe it went on EMI. We are not judging; we made a tee about it.
      </p>
      <p>
        This is the practical part: what to wear so you are still comfortable at the last song, not just at the
        entry-gate selfie. No brand names, no star-spotting, just the stuff that works.
      </p>

      <h2>1. Start with your feet</h2>
      <p>
        Everything else is negotiable. Shoes are not. A big show means standing for hours, plus queues on the way in
        and a long walk to find a cab on the way out. Grounds are often uneven, grassy or dusty. Stylist Isha Bhansali
        told <a href="https://www.hindustantimes.com/htcity/htcity-showstoppers/concert-style-guide-what-to-wear-according-to-fashion-experts-101762066540105.html" target="_blank" rel="noopener">Hindustan Times</a>{" "}
        that pointed heels are "a strict no" for exactly that reason.
      </p>
      <ul>
        <li>Wear closed shoes you have already broken in. A concert is not the place to test a new pair.</li>
        <li>Brand-new white sneakers on a dusty ground will come home a different colour. Plan accordingly.</li>
        <li>Thicker socks help if you will be on your feet for four hours or more.</li>
      </ul>

      <h2>2. Cotton base, one loud thing</h2>
      <p>
        Crowds are warm, even in December. The same stylists' advice was to "stick to cottons, light summer jackets,
        or cool denims with minimal embellishments". Heavy sequins look great for the first song and feel like a
        sauna by the third.
      </p>
      <p>
        The easiest formula: a breathable base, comfortable trousers or denim, and one piece with personality. A
        graphic tee is the classic choice because it does the talking while you do the dancing. Pick a line you
        actually find funny, because forty people behind you are going to read it.
      </p>

      <h2>3. Dress for the city, not the poster</h2>
      <p>
        India does not have one December. A night show in Delhi NCR in December can get properly cold once the sun goes
        down. Mumbai stays mild and a bit humid. Bengaluru sits somewhere in between and turns cool late at night.
        Check the forecast for your city on the afternoon of the show and dress for the walk home, not just the walk in.
      </p>
      <p>
        The trick everyone eventually learns: carry one layer you can tie around your waist. An overshirt, a light
        jacket or a shrug. It goes on when the wind picks up, comes off when the crowd heats up, and works as a cushion
        when you sit on the kerb after.
      </p>

      <h2>4. The small-bag rule</h2>
      <p>
        Large bags are a common reason for slow queues and awkward conversations at the gate. Rules on bag size, what
        you can carry in and re-entry change from venue to venue, so read the guidelines on your ticket before you
        leave. A small crossbody or belt bag keeps your phone, ID, cards and ticket close and leaves both hands free
        for the chorus.
      </p>

      <h2>5. Leave behind anything that can get caught</h2>
      <p>
        Long dupattas, trailing scarves and long chains get tugged, stepped on and lost in a packed crowd. If you are
        going desi, pin the dupatta across one shoulder or skip it. Go for studs or light earrings over heavy ones. Tie
        your hair back: a braid or low bun survives three hours of jumping better than open hair.
      </p>

      <h2>6. About that EMI</h2>
      <p>
        Every concert season brings the same joke: the ticket on EMI, the outfit on credit card, the cab fare on
        "we'll see". It is funny because it is a bit true. If your gig plan has started to look like a monthly
        instalment, it helps to see the full number before you add the merch and the after-party. The{" "}
        <a href="https://gintikaro.in/concert-season-budget-calculator" target="_blank" rel="noopener">concert season budget calculator on Ginti Karo</a>{" "}
        adds up tickets, travel, food and stay so the total does not surprise you in January.
      </p>
      <p>
        And if you are going to make the joke anyway, you may as well wear it. Our{" "}
        <Link to="/product/$slug" params={{ slug: "emi-pe-rave" }}>EMI Pe Rave tee</Link> says it for you: paisa gaya,
        vibe aayi. It is ₹799 with shipping included, and there is a mug at ₹449 for the morning after. Every piece is
        printed to order in India and ships in 5–9 days, so order a little ahead of the gig rather than the night before.
      </p>

      <h2>The five-minute checklist</h2>
      <ul>
        <li>Shoes: closed, flat, already broken in.</li>
        <li>Base: breathable cotton, one statement piece.</li>
        <li>Layer: one thing you can tie around your waist, warmer if you are up north.</li>
        <li>Bag: small, crossbody, rules checked on the ticket.</li>
        <li>Phone: charged. Power bank only if the venue allows it.</li>
        <li>Hair and jewellery: tied back, kept light.</li>
        <li>Plan home: decide the meeting spot and the ride back before the show, not after.</li>
      </ul>
      <p>
        The best concert outfit is the one you forget you are wearing by the encore. Comfortable feet, a layer for the
        ride home, and a tee that makes the stranger next to you laugh. The rest is just vibe.
      </p>
    </>
  );
}
