export const siteConfig = {
  name: "AIA Surveyors",
  shortName: "AIA",
  tagline: "Precision on Every Terrain",
  proprietor: "Saiyed Rahmatullah",
  founded: 2020,
  gstin: "07BRKPR7554N1ZU",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aiasurveyors.in",
  email: "zafarrahmat@gmail.com",
  phones: ["+919810747407"],
  phonesDisplay: ["+91 98107 47407"],
  address:
    "C-278/3, Fourth Floor, F/Side, A.F. Encl. Part II, Shaheen Bagh, Jamia Nagar, New Delhi 110025",
  addressShort: "Shaheen Bagh, New Delhi",
  regions: ["Delhi NCR", "Across India"],
  hours: "Mon–Sat · 09:30–19:00 IST",
  socials: {
    email: "mailto:zafarrahmat@gmail.com",
    phone: "tel:+919810747407",
    whatsapp: "https://wa.me/919810747407",
  },
} as const;
