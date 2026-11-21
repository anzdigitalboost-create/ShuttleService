// English — the source locale for shuttleservice.co.nz. Every other file in
// this folder must keep the same shape (same keys, same list lengths, same
// {{placeholders}}); `npm run check:locales` enforces it before each build.
// Interface copy shared with the sibling storefronts is in ./shared/en.js.
import shared from './shared/en.js'

export default {
  ...shared,
  nav: { ...shared.nav, private: 'Private Shuttle', groups: 'Group Shuttle', airport: 'Airport Shuttle' },
  hero: {
    badge: 'Private shuttle hire in Auckland',
    title1: "From your door to the ",
    title2: "terminal door",
    subtitle: "Private transfers across Auckland and to Auckland Airport, 24 hours a day. One vehicle, one fixed price, no shared stops.",
  },
  home: {
    waysEyebrow: 'What we do',
    waysTitle: 'One Shuttle Service, Three Ways to Use It',
    waysText: 'Every booking is a private vehicle with a professional driver. Pick the kind of trip and see how it works.',
    ways: [
      { title: "Private shuttle", text: "Point to point anywhere in Auckland. One vehicle, your group only." },
      { title: "Group shuttle", text: "Up to 11 passengers per van, with more vans for bigger groups." },
      { title: "Airport shuttle", text: "Door to door to Auckland Airport. Flight tracked, free waiting time." },
    ],
    whyEyebrow: 'Why book with us',
    whyTitle: 'Simple, Fixed and Private',
    why: [
      { title: 'The whole vehicle is yours', text: 'We never add other passengers to your trip, so there are no extra stops and no waiting.' },
      { title: 'The price is fixed before you pay', text: 'It is worked out from your addresses and shown on screen. No meter and no surge pricing.' },
      { title: 'Running day and night', text: 'Shuttles operate 24 hours a day, every day of the year, public holidays included.' },
      { title: 'Families and gear welcome', text: 'Child seats are free, and trailers carry bikes, skis, golf bags and group luggage.' },
    ],
    stepsEyebrow: 'Booking',
    stepsTitle: 'From Quote to Pickup in Four Steps',
    steps: [
      { title: "Tell us the trip", text: "Addresses, date and passengers." },
      { title: "See the fixed price", text: "Shown straight away, nothing to pay to look." },
      { title: "Meet your driver", text: "At your door, at the time you chose." },
    ],
    routeFrom: "Your door",
    routeTo: "Airport",
    faqTitle: 'Shuttle Service FAQs',
    faqs: [
      { q: 'What does a shuttle service cost?', a: 'It depends on the distance and the number of passengers. Enter your trip on the booking page to see the exact fixed price before you pay.' },
      { q: 'Do I share the shuttle with anyone?', a: 'No. Every booking is private to your group.' },
      { q: 'How many passengers can you take?', a: 'Up to 11 passengers per vehicle with luggage. For larger groups we send more than one vehicle. Call 022 355 2808 and we will arrange it.' },
      { q: 'Can I cancel?', a: 'Yes. Cancel more than 24 hours before pickup for a full refund.' },
    ],
    fleetAlt: 'Toyota Hiace high-roof passenger van used by {{brand}}',
    fleetBadgeTitle: 'Up to 11 passengers',
    fleetBadgeText: 'per vehicle, with luggage',
  },
  pages: {
    private: {
      eyebrow: 'Point to point across Auckland',
      title: 'Private Shuttle',
      accent: 'Hire',
      lead: 'Book a private shuttle and driver for any trip in the Auckland region. You choose the pickup time and place; the price is fixed before you pay.',
      usesEyebrow: 'Popular trips',
      usesTitle: 'What People Book a Private Shuttle For',
      uses: [
        { title: 'Winery and restaurant trips', text: 'Everyone gets to enjoy the lunch. We drop you at the door and bring you home afterwards.' },
        { title: 'Concerts and sports', text: 'Skip event parking. Be dropped near the venue and collected when it finishes.' },
        { title: 'Cruise terminal transfers', text: 'Between Queens Wharf or Princes Wharf and your hotel, home or the airport, with room for cruise luggage.' },
        { title: 'Hobbiton day trips', text: 'A private return transfer to the Hobbiton Movie Set near Matamata, about two hours each way. Tour tickets are booked separately with Hobbiton.' },
        { title: 'Work travel', text: 'Move staff or visitors between offices, hotels and venues, with an emailed receipt for each booking.' },
        { title: 'Late nights', text: 'A safe ride home at any hour. Pickups from 11pm to 5:59am carry a $15 night surcharge, shown before you pay.' },
      ],
      faqsTitle: 'Private Shuttle FAQs',
      faqs: [
        { q: 'Can the shuttle take us home again later?', a: 'Yes. Book a return trip and choose the time you want to be collected. Both legs are priced together.' },
        { q: 'Can we make extra stops on the way?', a: 'For trips with extra stops, call 022 355 2808 and we will quote it.' },
        { q: 'Are child seats available?', a: 'Yes, free of charge. Tell us the ages when you book and the seats are fitted before pickup.' },
      ],
      ctaTitle: 'Price Your Private Shuttle',
    },
    groups: {
      eyebrow: 'Up to 11 passengers per vehicle',
      title: 'Group Shuttle',
      accent: 'Hire',
      lead: 'One booking moves the whole group. Each van seats up to 11 with luggage, and larger groups travel together in more than one vehicle.',
      typesEyebrow: 'Who it suits',
      typesTitle: 'Group Shuttles for Events and Teams',
      types: [
        { title: 'Weddings and events', text: 'Get guests from the hotel to the venue and back without anyone needing to drive.', points: ['Guest transfers between venues', 'Pickup times you set', 'Return trips at the end of the night'] },
        { title: 'Teams, schools and tours', text: 'Players, students or tour members travel together with their bags and equipment.', points: ['Room for sports gear', 'Luggage trailers when needed', 'Airport and cruise connections'] },
      ],
      includedEyebrow: 'Every group booking',
      includedTitle: 'What a Group Shuttle Includes',
      included: [
        { title: 'A private vehicle', text: 'The van carries your group only, from your pickup address to your destination.' },
        { title: 'One fixed price', text: 'The price covers the vehicle, not each seat, and is shown before you pay.' },
        { title: 'Space for bags', text: 'High-roof Toyota Hiace vans take luggage inside, and a trailer handles the rest.' },
      ],
      faqsTitle: 'Group Shuttle FAQs',
      faqs: [
        { q: 'We have more than 11 people. Can you still take us?', a: 'Yes. We send two or more vehicles that travel together. Call 022 355 2808 so we can plan it with you.' },
        { q: 'Is the price per person?', a: 'No. The price is for the vehicle, whatever the number of passengers up to 11.' },
        { q: 'Can children travel with the group?', a: 'Yes. Child seats are free. Tell us the ages when you book.' },
      ],
      ctaTitle: 'Price Your Group Shuttle',
    },
    airport: {
      eyebrow: 'Auckland Airport, domestic and international',
      title: 'Airport Shuttle',
      accent: 'Service',
      lead: 'A private shuttle between your door and Auckland Airport. Your flight is tracked, so the driver is there when you land.',
      directionsEyebrow: 'Both directions',
      directionsTitle: 'To the Airport and Home Again',
      directions: [
        { title: 'Going to the airport', text: 'We pick you up at the time you choose and drop you at the terminal door.', points: ['Pickup from any Auckland address', 'Help with luggage', 'Domestic or international terminal'] },
        { title: 'Coming home', text: 'Your driver meets you in the arrivals area and takes you straight to your address.', points: ['Flight tracked automatically', '30 minutes free waiting after domestic arrivals', '60 minutes free waiting after international arrivals'] },
      ],
      includedEyebrow: 'Included',
      includedTitle: 'Part of Every Airport Shuttle',
      included: [
        { title: 'Flight tracking', text: 'Add your flight number when you book. If the flight is early or late, the pickup time changes with it.' },
        { title: 'Free child seats', text: 'Infant, child and booster seats at no charge when requested at booking.' },
        { title: 'Fixed price', text: 'Shown before you pay and inclusive of GST. Pickups from 11pm to 5:59am add a $15 night surcharge.' },
      ],
      faqsTitle: 'Airport Shuttle FAQs',
      faqs: [
        { q: 'What if my flight is delayed?', a: 'We track arriving flights and move the pickup time at no extra charge.' },
        { q: 'Can I book the return trip at the same time?', a: 'Yes. Choose a return trip on the booking page and both legs are priced and confirmed together.' },
        { q: 'Where do I meet the driver?', a: 'In the arrivals area of your terminal. If you cannot find each other, call 022 355 2808.' },
      ],
      ctaTitle: 'Price Your Airport Shuttle',
    },
  },
  meta: {
    ...shared.meta,
    siteTitle: 'Shuttle Service — Private & Group Shuttles in Auckland',
    home: { desc: 'Shuttle Service offers private and group shuttle hire across Auckland, including airport, cruise and event transfers. Fixed prices, 24/7. Book online in 60 seconds.' },
    private: { title: 'Private Shuttle Hire Auckland — Point to Point', desc: 'Hire a private shuttle and driver anywhere in Auckland: wineries, concerts, cruise terminals, Hobbiton day trips and work travel. One vehicle, one fixed price.' },
    groups: { title: 'Group Shuttle Hire Auckland — Up to 11 per Van', desc: 'Group shuttle hire in Auckland for weddings, events, sports teams, schools and tours. Up to 11 passengers per vehicle, more vehicles for larger groups, priced per vehicle.' },
    airport: { title: 'Airport Shuttle Service Auckland — Door to Door', desc: 'Private airport shuttle service to and from Auckland Airport. Flight tracking, free waiting time, free child seats and a fixed price shown before you pay.' },
  },
}
