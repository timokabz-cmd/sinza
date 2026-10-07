export type GalleryImage = {
  src: string;
  alt: string;
};

export type Program = {
  slug: string;
  number: string;
  title: string;
  shortBody: string;
  heroBody: string;
  details: string[];
  /** Placeholder image key — swap for a real photo import once available. */
  imageKey: "feeding" | "capital" | "story" | "education" | "health" | null;
  /** Real outreach photos for this programme, set from src/routes/programs/$slug.tsx. */
  gallery?: GalleryImage[];
  galleryCaption?: string;
  /** Optional YouTube video id to embed on this programme's page. */
  youtubeId?: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "women-and-girl-empowerment",
    number: "01",
    title: "Women & Girl Child Empowerment",
    shortBody:
      "Restoring hope and confidence so women and girls can lead healthier, purposeful lives.",
    heroBody:
      "We work directly with women, girls and widows across Wakiso and Kampala to rebuild confidence, restore dignity and open pathways to a healthier, more purposeful life.",
    details: [
      "Mentorship circles for adolescent girls, led by women in the community.",
      "Safe spaces for widows to rebuild social and economic support networks.",
      "Confidence-building workshops tied into our skilling and financial literacy programme.",
    ],
    imageKey: "story",
  },
  {
    slug: "hiv-aids-prevention",
    number: "02",
    title: "HIV/AIDS Prevention",
    shortBody:
      "Community education and dialogue that promote healthy behaviours for body, mind and spirit.",
    heroBody:
      "Through open dialogue, community health education and partnerships with hospitals like Mulago and CoRSU, we help families access accurate information and the right care at the right time.",
    details: [
      "Community-led health education sessions on prevention and stigma reduction.",
      "Accompaniment to referral hospitals for testing, treatment and follow-up care.",
      "Partnership with CoRSU and Mulago National Referral Hospital for specialist referrals.",
    ],
    imageKey: null,
    galleryCaption: "From our visit to CoRSU Hospital",
  },
  {
    slug: "gender-based-violence-prevention",
    number: "03",
    title: "Gender-Based Violence Prevention",
    shortBody:
      "Awareness, safe conversations and support for women and girls affected by violence.",
    heroBody:
      "We create safe, judgement-free spaces for women and girls to talk about violence, understand their rights and access the support they need to move forward.",
    details: [
      "Community awareness campaigns on recognising and reporting abuse.",
      "Safe, confidential conversations and referrals to support services.",
      "Ongoing follow-up support for survivors within their own communities.",
    ],
    imageKey: null,
  },
  {
    slug: "skilling-and-financial-literacy",
    number: "04",
    title: "Skilling, Training & Financial Literacy",
    shortBody:
      "Entrepreneurship and money skills — plus interest-free loans that help women run their businesses.",
    heroBody:
      "We train women in practical business and money-management skills, then back that training with interest-free loans so they can put what they've learned to work immediately.",
    details: [
      "Hands-on entrepreneurship and financial literacy training.",
      "Interest-free loans, repaid slowly and on the borrower's own terms.",
      "Ongoing mentorship as businesses take root and grow.",
    ],
    imageKey: "capital",
  },
  {
    slug: "education-and-economic-empowerment",
    number: "05",
    title: "Education Support & Economic Empowerment",
    shortBody:
      "Full and half bursaries for vulnerable children, and pathways from school into work.",
    heroBody:
      "Every child deserves the chance to finish school. We provide full and half bursaries to vulnerable children and help young people build a pathway from the classroom into meaningful work.",
    details: [
      "Full and half school-fee bursaries for children from vulnerable families.",
      "Support that follows a child through multiple terms, not just a single payment.",
      "Pathways connecting graduating youth to further training or employment.",
    ],
    imageKey: "education",
  },
  {
    slug: "health-and-emergency-response",
    number: "06",
    title: "Health & Emergency Response",
    shortBody:
      "Rapid, hands-on support for families facing a sudden health crisis.",
    heroBody:
      "Some needs can't wait. When a family is hit by a medical emergency, we step in quickly with practical, on-the-ground support — because a crisis is not the moment to be left alone.",
    details: [
      "Rapid-response support for families facing sudden or high-risk medical situations.",
      "Practical help with essentials during hospital stays and recovery.",
      "Ongoing follow-up after the emergency has passed, so support doesn't end too soon.",
    ],
    imageKey: "health",
    galleryCaption: "Responding to a mother of quadruplets in Mbale",
    youtubeId: "u7_OE8pF88s",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}
