export const SITE = {
  name: "Bright Fox Dayhome",
  tagline: "Growing Smart, Playing Bright",
  phone: "+1 (587) 889-4788",
  phoneRaw: "+15878894788",
  email: "brightfoxdayhome@gmail.com",
  address: "81 Nolancrest Green NW, Calgary, AB",
  hours: "6:30 AM – 5:30 PM",
  days: "Monday – Friday",
  whatsapp: "15878894788",
  url: "https://brightfoxdayhome.ca",
  mapUrl:
    "https://www.google.com/maps/place/81+Nolancrest+Green+NW,+Calgary,+AB",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5!2d-114.18!3d51.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA5JzAwLjAiTiAxMTTCsDEwJzQ4LjAiVw!5e0!3m2!1sen!2sca!4v1",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_POINTS = [
  { icon: "CheckCircle", label: "Alberta Approved" },
  { icon: "Clock", label: "Open 6:30 AM" },
  { icon: "DollarSign", label: "$326/mo with subsidy" },
  { icon: "Baby", label: "Infant Care Available" },
] as const;

export const FEATURES = [
  {
    icon: "UtensilsCrossed",
    title: "Meals Provided",
    description: "Nutritious meals and snacks included every day.",
  },
  {
    icon: "BadgeDollarSign",
    title: "Grants & Subsidies",
    description:
      "We accept Alberta childcare subsidies. Full-time care from $326.25/mo.",
  },
  {
    icon: "CalendarCheck",
    title: "Full-Time Spots",
    description:
      "Consistent, full-time care so you can work with confidence.",
  },
  {
    icon: "ShieldCheck",
    title: "Certified & Trusted",
    description:
      "Alberta-approved with training and experience parents trust.",
  },
  {
    icon: "Heart",
    title: "Infant Care",
    description:
      "Gentle, attentive care for your youngest. Spots available now.",
  },
  {
    icon: "Users",
    title: "Siblings Welcome",
    description:
      "Keep your kids together in a familiar, loving environment.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What are Bright Fox's hours?",
    answer: "We are open from 6:30 AM to 5:30 PM, Monday through Friday.",
  },
  {
    question: "What ages do you accept?",
    answer:
      "We accept children from infancy through age 5. We currently have infant spots available.",
  },
  {
    question: "Do you accept siblings?",
    answer:
      "Yes! We welcome sibling enrolments. Having your children together in one familiar setting simplifies logistics and helps siblings bond.",
  },
  {
    question: "How much does it cost?",
    answer:
      "$326.25/month for full-time care and $230/month for part-time care under Alberta's Affordability Grant. No income testing required — all families pay the same rate.",
  },
  {
    question: "Do you provide meals?",
    answer:
      "Yes, all meals and snacks are included. We prepare nutritious, home-cooked food daily and accommodate allergies and dietary needs.",
  },
  {
    question: "Are you licensed/approved?",
    answer:
      "Yes, Bright Fox Dayhome is an Alberta Approved Family Day Home, meeting all provincial standards for safety, training, and quality of care.",
  },
  {
    question: "How do I apply for the subsidy?",
    answer:
      "The Alberta Affordability Grant is applied automatically — there is no separate application needed. All families receive the reduced rate.",
  },
  {
    question: "Can I visit before enrolling?",
    answer:
      "Absolutely! We encourage parents to visit and see our space in person. Call or text us at (587) 889-4788 to schedule a visit.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located at 81 Nolancrest Green NW, in the heart of Nolan Hill, Calgary. Easily accessible from Sage Hill, Evanston, Kincora, and Sherwood.",
  },
  {
    question: "What's the difference between a dayhome and a daycare?",
    answer:
      "A dayhome operates in a private residence with smaller group sizes (up to 6 children), providing a home-like setting with a consistent caregiver. Daycares are larger commercial centres. Many parents prefer dayhomes for the personal attention and family feel.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Bright Fox has been amazing for our family. Our kids love going every day, and we love the peace of mind knowing they are in such great hands.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    quote:
      "The care and attention our infant receives is outstanding. We feel so lucky to have found a spot here.",
    name: "James & Priya R.",
    rating: 5,
  },
  {
    quote:
      "Both our kids attend Bright Fox and they absolutely love it. The meals are great, the activities are engaging, and the caregiver is wonderful.",
    name: "Amina K.",
    rating: 5,
  },
] as const;

export const SERVICES = [
  {
    title: "Infant Care (0–19 months)",
    description:
      "Gentle, attentive care designed for your youngest family members. Alberta limits dayhomes to a maximum of 2 infants under age 2, ensuring your baby receives focused, one-on-one attention in a calm, nurturing environment. We follow safe sleep practices and age-appropriate routines.",
    icon: "Baby",
  },
  {
    title: "Toddler & Preschool Care (19 months – 5 years)",
    description:
      "Play-based learning that builds social skills, creativity, and school readiness. Our days include structured activities, free play, outdoor time, arts and crafts, storytime, and music — all in a warm, home-like setting that feels like a second family.",
    icon: "Blocks",
  },
  {
    title: "Full-Time Care",
    description:
      "Consistent, reliable care from 6:30 AM to 5:30 PM, Monday through Friday. Our early start time is one of the earliest in the Nolan Hill area, giving commuting parents the flexibility they need.",
    icon: "CalendarCheck",
  },
  {
    title: "Part-Time Care",
    description:
      "Flexible part-time arrangements for families who need care a few days per week. Contact us to discuss availability and scheduling options that work for your family.",
    icon: "Clock",
  },
  {
    title: "Meals & Nutrition",
    description:
      "Nutritious, home-cooked meals and snacks are included every day. We accommodate allergies and dietary restrictions to ensure every child is well-fed and energized throughout the day.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Sibling Enrolment",
    description:
      "Keep your children together in the same dayhome. We are one of the few providers in the area that can accommodate an infant and an older sibling in the same setting — simplifying your mornings and giving your kids the comfort of being together.",
    icon: "Users",
  },
] as const;
